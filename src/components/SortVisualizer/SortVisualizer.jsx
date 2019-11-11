import React from 'react';
import './sort.min.css'
import { randomInt, testSortingAlgorithms } from './functions/functions'

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
    for (let i = 0; i < 50; i++) {
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
                backgroundColor: "#2ad19d",
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
