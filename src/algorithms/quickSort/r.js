import { swap } from "../../utils"

function partition(items, left, right, animationArray) {
  const pivot = items[Math.floor((right + left) / 2)] // middle element
  let i = left // left pointer
  let j = right // right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      // animationArray.push([i, j, false])
      i++;
    }
    while (items[j] > pivot) {
      // animationArray.push([i, j, false])
      j--;
    }
    if (i <= j) {
      swap(items, i, j); // sawpping two elements
      animationArray.push([i, j, true])
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, animationArray, left = 0, right = array.length - 1) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, animationArray); // index returned from partition
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
  const animationArray = []
  const array = [...arr]
  quickSort(array, animationArray)
  return animationArray
}
