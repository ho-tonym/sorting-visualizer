import {
  getBubbleSortAnim,
  getHeapSortAnim,
  getInsertSortAnim,
  getMergeSortAnim,
  getQuickSortAnim,
  getSelectSortAnim,
} from './index'

import { arraysEqual, resetArray } from "../utils"
import { swapOrAssign } from './animation/executeAnim'

it('all algorithms work', () => {
  const algorithms = [getBubbleSortAnim, getHeapSortAnim, getInsertSortAnim, getMergeSortAnim, getQuickSortAnim, getSelectSortAnim]
  for (let a = 0; a < algorithms.length; a++) {
    const array = resetArray(50)
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);

    const animArray = algorithms[a](array)
    const arr = [...array]


    for (let i = 0; i < animArray.length; i++) {
      const [j, k, bool, l] = animArray[i]

      swapOrAssign(arr, animArray, j, k, bool, l)
    }

    expect(arraysEqual(javaScriptSortedArray, arr)).toBe(true)
  }
})
