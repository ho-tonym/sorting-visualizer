import { swap } from '../../utils'

export const getSelectSortAnim = (array) => {
  const arr = [...array]
  const length = arr.length;
  const animationArray = []
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
        animationArray.push([ // new low
          j - 1, j, false,
        ])
      } else {
        animationArray.push([ // move along
          min, j, false,
        ])
      }
    }
    if (min !== i) {
      swap(arr, i, min)
      animationArray.push([ // swap at end
        min, i, true,
      ])
    }
  }
  return animationArray
}
