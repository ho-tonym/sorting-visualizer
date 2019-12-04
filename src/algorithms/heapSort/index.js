import { swap } from "../../utils"

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
  // else{
  //   animationArray.push([
  //     i, max, false,
  //   ])
  // }
}

//build max heap`
export const getHeapSortAnim = (array) => {
  const arr = [...array]
  let a;
  length = arr.length;
  animationArray = []
  // build max heap
  for (let i = Math.floor(length / 2); i >= 0; i -= 1) {
    heapify(arr, i);
  }

  for (a = arr.length - 1; a > 0; a--) {
    swap(arr, 0, a);
    animationArray.push([0, a, true])
    length--;

    heapify(arr, 0);
  }

  return animationArray
}
