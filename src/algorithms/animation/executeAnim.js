import { swap } from "../../utils"

export function swapOrAssign(arr, pArray, j, k, bool, l) {
  if(bool) {
    if(pArray[0].length !== 3) {
      arr[j] = l
    } else {
      swap(arr, j, k)
    }
  }
}

export const executeAnim = (setState, pArray, array) => {
  const arr = [...array]
  const [j, k, bool, l] = pArray[0]
  const values = [j, k, bool]

  swapOrAssign(arr, pArray, j, k, bool, l)

  setState(prevState => ({ ...prevState,
    array: arr,
    animArray: prevState.animArray.slice(1),
    comparedValues: values,
  }))
}
