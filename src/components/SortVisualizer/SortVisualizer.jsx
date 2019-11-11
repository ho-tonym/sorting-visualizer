import React from 'react';

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
      array.push(randomInt(5, 730));
    }
    this.setState({array});
    console.log(array)
  }

  render() {
    return (
      <div className="array-container">
        <h1>YEET</h1>
      </div>
    );
  }
}

export default SortVisualizer
