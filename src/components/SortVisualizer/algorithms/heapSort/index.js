import { swap } from '../../utils'

let length;
let animationArray;

function heapify(array, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < length && array[left] > array[max]) {
    max = left;
  }

  if (right < length && array[right] > array[max]) {
    max = right;
  }

  if (max !== i) {
    swap(array, i, max);
    animationArray.push([
      i, max, true,
    ])
    heapify(array, max);
  }
}

let i;

export const heapSort = (arr, setState) => {
  const array = [...arr]
  length = array.length;
  animationArray = []
  //build max heap
  for (let i = Math.floor(length / 2); i >= 0; i -= 1) {
    heapify(array, i);
  }

  for (i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    animationArray.push([0, i, true])
    length--;

    heapify(array, 0);
  }

  setState(prevState => ({ ...prevState,
    animationArray,
    isRunning: true,
  }))
}
