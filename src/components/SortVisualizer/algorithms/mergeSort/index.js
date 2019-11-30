let tempArray = []
let animationArray = []
export function startMergeSort(arr) {
  if (arr.length <= 1) return arr;
  tempArray = [...arr]
  let array = [...arr]
  mergeSortHelper(array, 0, array.length - 1)
  // return array
  return animationArray
}

function mergeSortHelper(array, leftStart, rightEnd) {
  if (leftStart === rightEnd) {
    // console.log("return" + leftStart)
    return
  }
  const middle = Math.floor((leftStart + rightEnd) / 2);
  // console.log(array, leftStart, rightEnd)
  mergeSortHelper(array, leftStart, middle)
  mergeSortHelper(array, middle + 1, rightEnd)
  doMerge(array, leftStart, rightEnd)

}

function doMerge(array, leftStart, rightEnd) {
  // console.log(array, leftStart, rightEnd)
  let leftEnd = Math.floor((rightEnd + leftStart) / 2);
  let rightStart = leftEnd + 1
  let size = rightEnd - leftStart + 1

  let left = leftStart
  let right = rightStart
  let index = leftStart

  while(left <= leftEnd && right <= rightEnd) {
    if (array[left] <= array[right]){
      tempArray[index] = array[left]
      left++
    } else {
      tempArray[index] = array[right]
      right++
    }
    index++
  }

  //copy from tempArray back into array
  arraycopy(array, left, tempArray, index, leftEnd - left + 1)
  arraycopy(array, right, tempArray, index, rightEnd - right + 1)
  arraycopy(tempArray, leftStart, array, leftStart, size)
}
// 0, 1, 1
// 2, 1, 0
function arraycopy(fromArr, fromPos, toArr, toPos, length) {

  for (var i = 0; i < length; i++) {
    // console.log(fromPos, fromArr[fromPos])
    toArr[toPos] = fromArr[fromPos]
    animationArray.push([fromPos, toArr[toPos]])

    toPos++
    fromPos++
  }
  // console.log("end", fromArr, fromPos, toArr, toPos, length)
}
//
// const x = [1,2,3,4]
// const y = [5,6,7,8]
// arraycopy(x, 0, y, 1, 1)
// console.log(x, y)
// startMergeSort([1,26,3,4])
