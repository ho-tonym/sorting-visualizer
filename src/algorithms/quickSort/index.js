import { swap } from "../../utils"

let animArray = []

function partition(arr, pivot, left, right) {
  const pivotValue = arr[pivot]
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      animArray.push([i, partitionIndex, true])
      swap(arr, i, partitionIndex);
      partitionIndex++;
    } else{
      animArray.push([i, partitionIndex, false])
    }
  }
  swap(arr, right, partitionIndex);
  animArray.push([right, partitionIndex, true])
  return partitionIndex;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    // sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

export function getQuickSortAnim(arr) {
  const array = [...arr]
  animArray = []
  quickSort(array)
  return animArray
}
