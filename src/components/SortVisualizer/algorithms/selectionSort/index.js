import { swap } from '../../utils'
//
// const selectionSort = (arr) => {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     let min = i;
//     for (let j = i + 1; j < length; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       let tmp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = tmp;
//     }
//   }
//   return arr;
// }


export const selectionSort = (array, setState) => {
  const arr = [...array]
  const length = arr.length;
  const animationArray = []
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {

      if (arr[min] > arr[j]) {
        min = j;
        animationArray.push([
          min, j, false,
        ])
        //new low
      } else {
        animationArray.push([
          min, j, false,
        ])
      }
    }
    if (min !== i) {
      swap(arr, i, min)
      animationArray.push([
        min, i, true,
      ])
    }
  }
  setState(prevState => ({ ...prevState,
    animationArray,
    isRunning: true,
  }))
}

export const executeSelectAnim = (setState, pArray, array) => {
  const j = pArray[0][0]
  const k = pArray[0][1]
  const bool = pArray[0][2]

  const tempArray = [...array]
  let value = tempArray

  if (bool) {
    swap(tempArray, j, k)
  }

  setState(prevState => ({ ...prevState,
    array: value,
    animationArray: prevState.animationArray.slice(1),
    comparedValues: [j, k, bool],
  }))
}
