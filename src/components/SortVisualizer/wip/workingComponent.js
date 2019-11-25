import React from 'react'
import './sort.min.css'
import { Navbar, Button } from 'react-bootstrap'
import { randomInt, resetArray, swap } from './utils'
import { mergeSort, mergeTestSortingAlgorithms } from './algorithms/mergeSort'
// import { bubbleSort } from './algorithms/bubbleSort/bubbleSort'
// component updates more than it needs to
import { MyContext } from '../../MyProvider'
      // <MyContext.Consumer>
      //   HomePage.contextType = MyContext
      //   {context.state.stuff}
const ARRAY_BARS_COUNT = 10
const ANIMTION_TIME = 50
const BAR_COLOR = "#2ad19d"
const BAR_DONE_COLOR = "#ff9f38"
const BAR_COMPARE_COLOR = "#4d84fe"

class SortVisualizer extends React.Component {
  state = {
    array: [],
    permutationsToExecute: [],
    isSorted: false,
    isRunning: false,
    comparedValues: [],
  }

  componentDidMount() {
    this.handleResetArray()
  }

  // componentDidUpdate(p, s){
  //   console.log(s)
  // }

  handleResetArray = () => {
    const array = resetArray(ARRAY_BARS_COUNT)
    clearInterval(this.interval);
    this.setState({
      array,
      permutationsToExecute: array,
      isSorted: false,
      isRunning: false,
      comparedValues: [],
    })
  }

  swapAnimation = (j, k) => {
    const { array } = this.state
    const tempArray = array.slice()
    const value = swap(tempArray, j, k)

    this.setState((prevState) => ({
      array: value,
      permutationsToExecute: prevState.permutationsToExecute.slice(1),
      comparedValues: [j, k],
    }))
  }

executeAnimation = () => {
  const { permutationsToExecute, isRunning } = this.state
  if (!isRunning) this.setState({ isRunning: true })
  if (permutationsToExecute.length > 0) {
    this.swapAnimation(permutationsToExecute[0][0], permutationsToExecute[0][1])
  } else {
    clearInterval(this.interval);
    this.setState({
      isRunning: false,
      isSorted: true,
      comparedValues: [],
    })
  }
}
// if we using this incomponent we need arrow functions
bubbleSort = () => {
  const arr = this.state.array.slice()
  const permutationsToExecute = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, stop = arr.length - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        permutationsToExecute.push([
          j, j + 1,
        ])
      }
    }
  }
  this.setState({
    permutationsToExecute,
  }, () => {
    this.interval = setInterval(this.executeAnimation, ANIMTION_TIME)
  })
}

  pauseResume = () => {
    // this.state.isRunning ? this.interval = setInterval(this.executeAnimation, ANIMTION_TIME) : clearInterval(this.interval);
    // this.setState((prevState) => ({
    //   isRunning: !prevState.isRunning
    // }))
  }

  render() {
    const { array, comparedValues, isRunning, isSorted } = this.state
    return (
      <>
        <div className="sort-visualizer">
          {array.length && array.map((value, id) => (
            <div
              key={id}
              style={{
                backgroundColor:
                `${isSorted ? BAR_DONE_COLOR
                  : !isRunning ? BAR_COLOR
                    : id === comparedValues[0] || id === comparedValues[1] ? BAR_COMPARE_COLOR : BAR_COLOR
                }`,
                height: `${value}px`,
              }}
            />
          ))
        }
        </div>
        <Navbar fixed="bottom" bg="dark" expand="lg">
          <Button variant="primary" onClick={this.handleResetArray}>Reset Array</Button>
          <Button variant="primary"
            onClick={() => {
              this.setState({ array: mergeSort(array) })
            }}
          >
            Merge Sort
          </Button>
          <Button variant="primary"
            onClick={() => {
              this.bubbleSort()
            }}
          >
            Bubble Sort
          </Button>
          <Button variant="primary" onClick={() => mergeTestSortingAlgorithms()}>Test Function</Button>
          <Button variant="primary" onClick={this.pauseResume}>PAUSE</Button>
        </Navbar>

      </>
    )
  }
}

export default SortVisualizer
