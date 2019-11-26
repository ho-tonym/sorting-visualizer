import { swap } from '../../utils'

export const executeAnim = (setState, pArray, array) => {
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
