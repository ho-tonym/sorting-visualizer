import { getBubbleSortAnim } from './index'
import { swap, arraysEqual } from '../../utils'
import { executeAnim } from '../animation/executeAnim'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function newArray(count) {
  const array = []
  for (let i = 0; i < count; i++) {
    array.push(randomInt(5, 400))
  }
  return array
}

it('bubble sort returns animations which sort an array', () => {
  const array = newArray(4)
  const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  const animations = getBubbleSortAnim(array)
  const finalArray = [...array]

  for (var i = 0; i < animations.length; i++) {
    const j = animations[i][0]
    const k = animations[i][1]
    const bool = animations[i][2]

    if (bool) {
      swap(finalArray, j, k)
    }
  }

  expect(arraysEqual(javaScriptSortedArray, finalArray)).toBe(true)
})
