import { randomInt, arraysEqual } from '../../utils'

export const mergeSort = array => {
  const arrayCopy = [...array];
  if (arrayCopy.length <= 1) {
    // console.log(array)
    return array;
  }
  const length = arrayCopy.length;
  const middle = Math.floor(length / 2);
  const left = arrayCopy.slice(0, middle);
  const right = arrayCopy.slice(middle);

  return mergeHelper(mergeSort(left), mergeSort(right));

};

const mergeHelper = (left, right) => {
  const results = [];
  while (left.length && right.length) { //check if either are 0 (falsey)
    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }
  return results.concat(left, right);
};



export const mergeTestSortingAlgorithms = () => {
  for (let i = 0; i < 100; i++) {
    const array = [];
    const length = randomInt(1, 1000);
    for (let i = 0; i < length; i++) {
      array.push(randomInt(-1000, 1000));
    }
    const jsMergeSortFunc = array.slice().sort((a, b) => a - b);
    const myMergeSortFunc = mergeSort(array.slice());
    console.log(arraysEqual(jsMergeSortFunc, myMergeSortFunc));
  }
}
