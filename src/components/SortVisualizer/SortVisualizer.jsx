import React from 'react'
import './sort.min.css'
import { randomInt } from './algorithms/helperFunctions'
import { mergeSort, mergeTestSortingAlgorithms } from './algorithms/mergeSort/mergeSort'
import { bubbleSort } from './algorithms/bubbleSort/bubbleSort'
import { Navbar, Button } from 'react-bootstrap'

const ARRAY_BARS_COUNT = 50
const BAR_COLOR = "#2ad19d"
// const BAR_COLOR = "#ff9f38"

class SortVisualizer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      array: []
    }
  }

  componentDidMount() {
    this.resetArray()
  }

  resetArray() {
    const array = []
    for (let i = 0; i < ARRAY_BARS_COUNT; i++) {
      array.push(randomInt(5, 400))
    }
      this.setState({array})
  }

  render() {
    const { array, barColor } = this.state
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
            bubbleSort(array)
          }}>Bubble Sort</Button>
          <Button variant="primary" onClick={() => mergeTestSortingAlgorithms()}>Test Function</Button>
        </Navbar>

      </>
    )
  }
}
            // this.setState({array: bubbleSort(array)})
export default SortVisualizer
