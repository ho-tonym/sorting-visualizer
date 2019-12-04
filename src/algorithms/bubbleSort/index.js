import { swap } from "../../utils"

export const getBubbleSortAnim = (array) => {
  const arr = [...array]
  const animationArray = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, stop = arr.length - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        animationArray.push([
          j, j + 1, true,
        ])
      } else if(j + 1 === arr.length - i) {
        // remove last one
      } else {
        animationArray.push([
          j, j + 1, false,
        ])
      }
    }
  }
  return animationArray
}
