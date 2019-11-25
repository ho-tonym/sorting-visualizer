import React, { useEffect } from 'react'
import './sort.min.css'
import { Navbar, Button } from 'react-bootstrap'
import { randomInt, resetArray, swap } from './utils'
import { mergeSort, mergeTestSortingAlgorithms } from './algorithms/mergeSort'
import { useStateValue } from '../../MyProvider'
import useInterval from './hooks/useInterval'

const ARRAY_BARS_COUNT = 10
const ANIMTION_TIME = 500
const BAR_COLOR = "#2ad19d"
const BAR_DONE_COLOR = "#ff9f38"
const BAR_COMPARE_COLOR = "#4d84fe"


function SortVisualizer() {
  const { state, setState } = useStateValue()
  const { array, comparedValues, isRunning, isSorted, permutationsToExecute } = state
  useEffect(() => {
    handleResetArray(setState)
  }, [])

  useInterval(() => {
    executeAnimation()
  }, isRunning ? ANIMTION_TIME : null);

  useEffect(() => {
    console.log(state)
  })

  function pauseResume() {
    if (permutationsToExecute.length > 0) {
      setState(prevState => ({
        ...prevState,
        isRunning: !prevState.isRunning,
      }))
    }
  }

  function handleResetArray() {
    const array = resetArray(ARRAY_BARS_COUNT)
    setState(prevState => ({
      ...prevState,
      array,
      isSorted: false,
      isRunning: false,
      comparedValues: [],
    }))
  }

  function bubbleSort() {
    const arr = array.slice()
    const permutationsToExecuteArray = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, stop = arr.length - i; j < stop; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          permutationsToExecuteArray.push([
            j, j + 1,
          ])
        }
      }
    }

    setState(prevState => ({
      ...prevState,
      permutationsToExecute: permutationsToExecuteArray,
      isRunning: true,
    }))
  }


  function executeAnimation() {
    permutationsToExecute.length > 0
      ? bubbleSwapAnimation(permutationsToExecute[0][0], permutationsToExecute[0][1])
        :(setState(prevState => ({
          ...prevState,
          isRunning: false,
          isSorted: true,
          comparedValues: [],
        })))
  }

  function bubbleSwapAnimation(j, k) {
    const tempArray = array.slice()
    const value = swap(tempArray, j, k)
    setState(prevState => ({
      ...prevState,
      array: value,
      permutationsToExecute: prevState.permutationsToExecute.slice(1),
      comparedValues: [j, k],
    }))
  }
//

  return (
    <>
      <div className="sort-visualizer">
        {array.length && array.map((value, id) => (
          <div
            key={id}
            style={{
              backgroundColor:
              `${isSorted ? BAR_DONE_COLOR
                  : id === comparedValues[0] || id === comparedValues[1] ? BAR_COMPARE_COLOR
                      : !isRunning ? BAR_COLOR : BAR_COLOR
              }`,
              height: `${value}px`,
            }}
          />
        ))
      }
      </div>
      <Navbar fixed="bottom" bg="dark" expand="lg">
        <Button variant="primary" onClick={() => handleResetArray(setState)}>Reset Array</Button>
        <Button variant="primary"
          onClick={() => setState(prevState => ({
            ...prevState, array: mergeSort(array)
          }))}
        >
          Merge Sort
        </Button>
        <Button variant="primary"
          onClick={() => {
            bubbleSort()
          }}
        >
          Bubble Sort
        </Button>
        <Button variant="primary" onClick={() => mergeTestSortingAlgorithms()}>Test Function</Button>
        <Button variant="primary" onClick={() => pauseResume()}>
          {permutationsToExecute.length <= 0 || permutationsToExecute.length > 0 && isRunning ? "Pause" : "Resume"}
        </Button>
      </Navbar>
    </>
  )
}

export default SortVisualizer
