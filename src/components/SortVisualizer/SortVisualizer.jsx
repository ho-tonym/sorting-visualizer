import React from 'react';
import './sort.min.css'
import { randomInt, testSortingAlgorithms } from './functions/functions'
import { mergeSort } from './functions/mergeFunction'
import { Navbar, Nav, Button } from 'react-bootstrap'

const ARRAY_BARS_COUNT = 50;
const BAR_COLOR = "#2ad19d";

class SortVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < ARRAY_BARS_COUNT; i++) {
      array.push(randomInt(5, 400));
    }
    this.setState({array});
  }

  render() {
    const { array } = this.state
    return (
      <>
        <div className="sort-visualizer">
          {array.map((value, id) => (
            <div
              key={id}
              style={{
                backgroundColor: BAR_COLOR,
                height: `${value}px`,
              }}>
            </div>
          ))}
        </div>
        <Navbar fixed="bottom" bg="dark" expand="lg">
          <Button variant="primary" onClick={() => this.resetArray()}>Reset Array</Button>
          <Button variant="primary" onClick={() => {
            this.setState({array: mergeSort(array)})
          }}>Merge</Button>
          <Button variant="primary" onClick={() => testSortingAlgorithms()}>Test Function</Button>
        </Navbar>

      </>
    );
  }
}

export default SortVisualizer
