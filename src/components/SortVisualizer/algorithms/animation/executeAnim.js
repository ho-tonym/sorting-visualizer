import { swap } from '../../utils'

export const executeAnim = (setState, pArray, array) => {
  const j = pArray[0][0]
  const k = pArray[0][1]
  const bool = pArray[0][2]

  const tempArray = [...array]
  const value = tempArray

  if (bool) {
    swap(tempArray, j, k)
  }

  setState(prevState => ({ ...prevState,
    array: value,
    animationArray: prevState.animationArray.slice(1),
    comparedValues: [j, k, bool],
  }))
}


// export const executeAnim = (setState, pArray, array) => {
//   let arr = [...array]
//   let fromPos = pArray[0][0]
//   let value = pArray[0][1]
//
//   arr[fromPos] = value
//
//   setState(prevState => ({ ...prevState,
//     array: arr,
//     animationArray: prevState.animationArray.slice(1),
//     comparedValues: [fromPos, fromPos],
//   }))
// }
