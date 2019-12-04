import { getSelectSortAnim } from './index'
import { arraysEqual, resetArray } from "../../utils"
import { swapOrAssign } from '../animation/executeAnim'

it('select sort works!', () => {
  const array = resetArray(50)
  const javaScriptSortedArray = array.slice().sort((a, b) => a - b);

  const animArray = getSelectSortAnim(array)
  const arr = [...array]


  for (let i = 0; i < animArray.length; i++) {
    const [j, k, bool, l] = animArray[i]

    swapOrAssign(arr, animArray, j, k, bool, l)
  }

  expect(arraysEqual(javaScriptSortedArray, arr)).toBe(true)
})
