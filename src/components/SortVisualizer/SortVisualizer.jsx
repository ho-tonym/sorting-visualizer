import React from 'react';
import './sort.min.css'
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    console.log(array)
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
      </>
    );
  }
}

export default SortVisualizer
