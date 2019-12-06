import { swap } from "../../utils"

let length;
let animArray;

function heapify(array, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < length && array[left] > array[max]) {
    max = left;
    animArray.push([
      i, max, false,
    ])
  }

  if (right < length && array[right] > array[max]) {
    max = right;
    animArray.push([
      i, max, false,
    ])
  }

  if (max !== i) {
    swap(array, i, max);
    animArray.push([
      i, max, true,
    ])
    heapify(array, max);
  } else{
    animArray.push([
      i, max, false,
    ])
  }
}

export const getHeapSortAnim = (array) => {
  const arr = [...array]
  let a;
  length = arr.length;
  animArray = []

  for (let i = Math.floor(length / 2); i >= 0; i -= 1) {
    heapify(arr, i);
  }

  for (a = length - 1; a > 0; a--) {
    swap(arr, 0, a);
    animArray.push([0, a, true])
    length--;

    heapify(arr, 0);
  }

  return animArray
}
