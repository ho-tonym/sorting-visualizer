import { swap } from '../../utils'

export const executeAnim = (setState, pArray, array) => {
  const arr = [...array]
  const [j, k, bool, l] = pArray[0]
  const values = [j, k, bool]

// animationArray.push([fromPos, toPos, true, toArr[toPos]])
  if(bool) {
    if(pArray[0].length !== 3) {
      arr[j] = l
    } else {
      swap(arr, j, k)
    }
  }

  setState(prevState => ({ ...prevState,
    array: arr,
    animationArray: prevState.animationArray.slice(1),
    comparedValues: values,
  }))
}
