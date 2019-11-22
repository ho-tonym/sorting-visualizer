import React from 'react'
import './sort.min.css'
import { randomInt } from './algorithms/helperFunctions'
import { mergeSort, mergeTestSortingAlgorithms } from './algorithms/mergeSort/mergeSort'
// import { bubbleSort } from './algorithms/bubbleSort/bubbleSort'
import { Navbar, Button } from 'react-bootstrap'

const ARRAY_BARS_COUNT = 10
const BAR_COLOR = "#2ad19d"
// const BAR_COLOR = "#ff9f38"
const ANIMTION_TIME = 1000
// ADD IN FINISHED COLOR






// function swapAnimation(array, j, k) {
//   const arrayBars = document.getElementsByClassName('sort-visualizer');
//
//   let barOneStyle = arrayBars[0].childNodes[j].style
//   let barTwoStyle = arrayBars[0].childNodes[k].style
//
//   barOneStyle["background-color"] = "#4d84fe";
//   barTwoStyle["background-color"] = "#4d84fe";
//   setTimeout(function () {
//     barOneStyle["background-color"] = "#2ad19d";
//     barTwoStyle["background-color"] = "#2ad19d";
//
//     let tempHeight = barOneStyle["height"]
//     barOneStyle["height"] = barTwoStyle["height"]
//     barTwoStyle["height"] = tempHeight
//
//
//     if (k >= lastNumber){
//       //NOT BEING CALLED ENOUGH
//       // console.log("j: "+ j, "k: " + k, "lastNumber: "+ lastNumber, "numberToAdjust: "+ numberToAdjust)
//       lastNumber = k
//     }
//     else{
//       // console.log("j: "+ j, "k: " + k, "lastNumber: "+ lastNumber, "numberToAdjust: "+ numberToAdjust + "c")
//       arrayBars[0].childNodes[numberToAdjust].style["background-color"] = "#ff9f38";
//       numberToAdjust--
//       lastNumber = 0
//     }
//     currentIteration++
//     // console.log(maxIterations, currentIteration)
//     if(currentIteration === maxIterations){
//       for (var i = 0; i < arrayBars[0].childNodes.length; i++) {
//         arrayBars[0].childNodes[i].style["background-color"] = "#ff9f38";
//       }
//     }
//   }, ANIMTION_TIME)
// }


class SortVisualizer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      array: [],
      permutationsToExecute: [],
      isSorted: false
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
      this.setState({array, permutationsToExecute: array, isSorted: false})
  }

  swap = (j, k) => {
    const tempArray = this.state.array
    const tempElement = tempArray[j]
    console.log("state  " + this.state.array)
    tempArray[j] = tempArray[k];
    tempArray[k] = tempElement;

    console.log("tstate " + tempArray)

    this.setState((prevState) => ({
      array: tempArray,
      permutationsToExecute: prevState.permutationsToExecute.slice(1)
    }))
  }

  executeAnimation = () => {
        // console.log(this.state.permutationsToExecute)
    const {permutationsToExecute} = this.state
    permutationsToExecute.length > 0 ? this.swap(permutationsToExecute[0][0], permutationsToExecute[0][1]) :
    this.setState({
      isSorted: true
    })

  }
// if we using this incomponent we need arrow functions
  bubbleSort = (arr) => {
    arr = arr.slice()
    let permutationsToExecute = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, stop = arr.length - i; j < stop; j++) {
        if (arr[j] > arr[j + 1]) {
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

  render() {
    const { array } = this.state
    return (
      <>
        <div className="sort-visualizer">
          {array.length ? array.map((value, id) => {
            return(
              <div
                key={id}
                style={{
                  backgroundColor: BAR_COLOR,
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
        </Navbar>

      </>
    )
  }
}
            // this.setState({array: bubbleSort(array)})
export default SortVisualizer
