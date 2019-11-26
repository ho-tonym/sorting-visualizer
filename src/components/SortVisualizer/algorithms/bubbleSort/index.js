import { swap } from '../../utils'

export const bubbleSort = (array, setState) => {
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
  setState(prevState => ({ ...prevState,
    animationArray,
    isRunning: true,
  }))
}

export const executeBubbleAnim = (setState, pArray, array) => {
  const j = pArray[0][0]
  const k = pArray[0][1]
  const bool = pArray[0][2]

  const tempArray = [...array]
  let value = tempArray
  if (bool) {
    value = swap(tempArray, j, k)
  }

  setState(prevState => ({ ...prevState,
    array: value,
    animationArray: prevState.animationArray.slice(1),
    comparedValues: [j, k, bool],
  }))
}
