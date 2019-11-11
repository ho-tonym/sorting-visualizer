import React from 'react';
import './sort.min.css'
import { randomInt, testSortingAlgorithms } from './functions/functions'

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
    return (
      <>
        <div className="sort-visualizer">
          {this.state.array.map((value, id) => (
            <div
              key={id}
              style={{
                backgroundColor: BAR_COLOR,
                height: `${value}px`,
              }}>
            </div>
          ))}
        </div>
        <button className="reset-button" onClick={() => this.resetArray()}>RESET ARRAY</button>
        <button className="test-merge-button" onClick={() => testSortingAlgorithms()}>TEST EQUALITY</button>
      </>
    );
  }
}

export default SortVisualizer
