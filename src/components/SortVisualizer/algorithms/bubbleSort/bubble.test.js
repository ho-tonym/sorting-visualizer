import { getBubbleSortAnim } from './index'
import { swap, arraysEqual, resetArray } from '../../utils'
import { executeAnim } from '../animation/executeAnim'

it('bubble sort returns animations which sort an array', () => {
  const array = resetArray(50)
  const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  const animations = getBubbleSortAnim(array)
  const finalArray = [...array]

  for (let i = 0; i < animations.length; i++) {
    const [j, k, bool] = animations[i]

    if (bool) {
      swap(finalArray, j, k)
    }
  }

  expect(arraysEqual(javaScriptSortedArray, finalArray)).toBe(true)
})
