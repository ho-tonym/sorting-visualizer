import React from 'react'
import './sort.min.css'
import { randomInt } from './algorithms/helperFunctions'
import { mergeSort, mergeTestSortingAlgorithms } from './algorithms/mergeSort/mergeSort'
// import { bubbleSort } from './algorithms/bubbleSort/bubbleSort'
import { Navbar, Button } from 'react-bootstrap'

const ARRAY_BARS_COUNT = 20
const BAR_COLOR = "#2ad19d"
const BAR_DONE_COLOR = "#ff9f38"
const BAR_COMPARE_COLOR = "#4d84fe"

const ANIMTION_TIME = 10


class SortVisualizer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      array: [],
      permutationsToExecute: [],
      isSorted: false,
      isRunning: false,
      comparedValues: []
    }
  }

  componentDidMount() {
    this.resetArray()
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.isSorted){
      clearInterval(this.interval);
    }
  }

  resetArray() {
    const array = []
    for (let i = 0; i < ARRAY_BARS_COUNT; i++) {
      array.push(randomInt(5, 400))
    }
      this.setState({
        array,
        permutationsToExecute: array,
        isSorted: false,
        isRunning: false
      })
  }

  swapAnimation = (j, k) => {
    const tempArray = this.state.array
    const tempElement = tempArray[j]

    tempArray[j] = tempArray[k];
    tempArray[k] = tempElement;

    this.setState((prevState) => ({
      array: tempArray,
      permutationsToExecute: prevState.permutationsToExecute.slice(1),
      comparedValues: [j,k]
    }))
  }

  swap = (array, j, k) => {
    const tempArray = array[j];
    array[j] = array[k];
    array[k] = tempArray;
  }


  executeAnimation = () => {
        // console.log(this.state.permutationsToExecute)
    const {permutationsToExecute} = this.state
    permutationsToExecute.length > 0 ? this.swapAnimation(permutationsToExecute[0][0], permutationsToExecute[0][1]) :
    this.setState({
      isSorted: true,
      isRunning: true,
    })
  }
// if we using this incomponent we need arrow functions
  bubbleSort = (arr) => {
    arr = arr.slice()
    let permutationsToExecute = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, stop = arr.length - i; j < stop; j++) {
        if (arr[j] > arr[j + 1]) {
          this.swap(arr, j, j + 1);
          permutationsToExecute.push([j, j+1])
        }
      }
    }
    this.setState({
      permutationsToExecute: permutationsToExecute
    },
      () => {
        this.interval = setInterval(this.executeAnimation, ANIMTION_TIME)
      }
    )//done
  }

  pauseResume = () => {
    this.state.isRunning ? this.interval = setInterval(this.executeAnimation, ANIMTION_TIME) : clearInterval(this.interval);
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning
    }))
  }

  render() {
    const { array, comparedValues, isRunning } = this.state
    return (
      <>
        <div className="sort-visualizer">
          {array.length ? array.map((value, id) => {
            return(
              <div
                key={id}
                style={{
                  backgroundColor:
                    `${isRunning ? BAR_COLOR : id === comparedValues[0] || id === comparedValues[1] ? BAR_COMPARE_COLOR : BAR_COLOR}`
                  ,
                  height: `${value}px`,
                }}>
              </div>
            )
          }) : null
        }
        </div>
        <Navbar fixed="bottom" bg="dark" expand="lg">
          <Button variant="primary" onClick={() => this.resetArray()}>Reset Array</Button>
          <Button variant="primary" onClick={() => {
            this.setState({array: mergeSort(array)})
          }}>Merge Sort</Button>
          <Button variant="primary" onClick={() => {
            this.bubbleSort(array)
          }}>Bubble Sort</Button>
          <Button variant="primary" onClick={() => mergeTestSortingAlgorithms()}>Test Function</Button>
          <Button variant="primary" onClick={this.pauseResume}>PAUSE</Button>
        </Navbar>

      </>
    )
  }
}
            // this.setState({array: bubbleSort(array)})
export default SortVisualizer
