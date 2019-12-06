let tempArray = []
let animArray = []

export function getMergeSortAnim(arr) {
  const length = arr.length
  if (length <= 1) return arr;
  tempArray = [...arr]
  let array = [...arr]
  animArray = []

  mergeSortHelper(array, 0, length - 1)
  return animArray
}

function mergeSortHelper(array, leftStart, rightEnd) {
  if (leftStart === rightEnd) return
  const middle = Math.floor((leftStart + rightEnd) / 2);

  mergeSortHelper(array, leftStart, middle)
  mergeSortHelper(array, middle + 1, rightEnd)
  doMerge(array, leftStart, rightEnd)
}

function doMerge(array, leftStart, rightEnd) {
  const leftEnd = Math.floor((rightEnd + leftStart) / 2);
  const rightStart = leftEnd + 1
  const size = rightEnd - leftStart + 1

  let left = leftStart
  let right = rightStart
  let index = leftStart

  while(left <= leftEnd && right <= rightEnd) {
    animArray.push([left, right, false, 0])
    if (array[left] <= array[right]) {
      tempArray[index] = array[left]
      // animArray.push([right, left, false, array[left]])
      left++
    } else {
      tempArray[index] = array[right]
      right++
    }
    index++
  }

  arrayCopy(array, left, tempArray, index, leftEnd - left + 1)
  arrayCopy(array, right, tempArray, index, rightEnd - right + 1)
  arrayCopy(tempArray, leftStart, array, leftStart, size, true)
}

function arrayCopy(fromArr, fromPos, toArr, toPos, length, doAnim) {
  for (let i = 0; i < length; i++) {
    toArr[toPos] = fromArr[fromPos]
    if (doAnim) { animArray.push([fromPos, toPos, true, toArr[toPos]]) }
    toPos++
    fromPos++
  }
}
