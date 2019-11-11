import { mergeSort } from './mergeFunction'

export function testSortingAlgorithms() {
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

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
