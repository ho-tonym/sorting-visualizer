import { swap } from "../../utils"

let animArray = []
function partition(arr, pivot, left, right) {
  const pivotValue = arr[pivot]
  let pivotIndex = left

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      animArray.push([i, pivotIndex, true])
      swap(arr, i, pivotIndex);
      pivotIndex++;
    } else{
      animArray.push([i, pivotIndex, false])
    }
  }
  swap(arr, right, pivotIndex);
  animArray.push([right, pivotIndex, true])

  return pivotIndex;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivot;
  let pivotIndex;

  if (left < right) {
    pivot = right;
    pivotIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

export function getQuickSortAnim(arr) {
  const array = [...arr]
  animArray = []
  quickSort(array)
  return animArray
}
