import React, { useEffect } from 'react'
import './sort.min.css'
import { Navbar, Button } from 'react-bootstrap'
import { randomInt, resetArray } from './utils'
import { swap } from './algorithms/bubbleSort'
import { mergeSort, mergeTestSortingAlgorithms } from './algorithms/mergeSort'
import { useStateValue } from '../../MyProvider'
import useInterval from './hooks/useInterval'
import { SliderContainer } from './slider'

const ANIMTION_TIME = 500

function SortVisualizer() {
  const { state, setState, slider } = useStateValue()
  const { array, comparedValues, isRunning, isSorted, permutationsToExecute } = state
  const { sliderValues } = slider

  useEffect(() => {
    handleResetArray(setState)
  }, [sliderValues])

  useInterval(() => {
    executeAnimation()
  }, isRunning ? ANIMTION_TIME : null);



  function pauseResume() {
    if (permutationsToExecute.length > 0) {
      setState(prevState => ({
        ...prevState,
        isRunning: !prevState.isRunning,
      }))
    }
  }

  function handleResetArray() {
    const array = resetArray(sliderValues)
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
            j, j + 1, true,
          ])
        }else{
          permutationsToExecuteArray.push([
            j, j + 1, false,
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
      ? bubbleSwapAnimation(permutationsToExecute)
        :(setState(prevState => ({
          ...prevState,
          isRunning: false,
          isSorted: true,
          comparedValues: [],
        })))
  }

  function bubbleSwapAnimation(pArray) {
    let j = pArray[0][0]
    let k = pArray[0][1]
    let bool = pArray[0][2]

    const tempArray = array.slice()
    let value = tempArray
    if (bool) {
      value = swap(tempArray, j, k)
    }

    setState(prevState => ({
      ...prevState,
      array: value,
      permutationsToExecute: prevState.permutationsToExecute.slice(1),
      comparedValues: [j, k],
    }))
  }
//
function handleSliderChange() {
  // debugger
}

  return (
    <>
      <div className="sort-visualizer">
        {array.length && array.map((value, id) => (
          <div
            key={id}
            style={{
              backgroundColor:
              `${isSorted ? "#ff9f38"
                  : id === comparedValues[0] || id === comparedValues[1] ? "#4d84fe"
                      : !isRunning ? "#2ad19d" : "#2ad19d"
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
        <SliderContainer handleSliderChange={handleSliderChange}/>
      </Navbar>
    </>
  )
}

export default SortVisualizer
