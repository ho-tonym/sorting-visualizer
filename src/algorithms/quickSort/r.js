import { swap } from "../../utils"

function partition(items, left, right, animArray) {
  const pivot = items[Math.floor((right + left) / 2)] // middle element
  let i = left // left pointer
  let j = right // right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      // animArray.push([i, j, false])
      i++;
    }
    while (items[j] > pivot) {
      // animArray.push([i, j, false])
      j--;
    }
    if (i <= j) {
      swap(items, i, j); // sawpping two elements
      animArray.push([i, j, true])
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, animArray, left = 0, right = array.length - 1) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, animArray); // index returned from partition
    if (left < index - 1) { // more elements on the left side of the pivot
      quickSort(array, left, index - 1);
    }
    if (index < right) { // more elements on the right side of the pivot
      quickSort(array, index, right);
    }
  }
  return array;
}

export function getQuickSortAnim(arr) {
  const animArray = []
  const array = [...arr]
  quickSort(array, animArray)
  return animArray
}
