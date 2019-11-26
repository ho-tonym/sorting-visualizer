import React, { useEffect } from 'react'
import './sort.min.css'
import { Navbar, Button } from 'react-bootstrap'
import { handleResetArray } from './utils'
import { useStateValue } from '../../MyProvider'
import useInterval from './hooks/useInterval'
import { SliderContainer } from './slider'

import { bubbleSort, bubbleSwapAnimation } from './algorithms/bubbleSort'
import { mergeSort } from './algorithms/mergeSort'

const ANIMTION_TIME = 100

function SortVisualizer() {
  const { state, setState, slider } = useStateValue()
  const { array, comparedValues, isRunning, isSorted, animationArray } = state
  const { sliderValues } = slider

  useEffect(() => {
    handleResetArray(setState, sliderValues)
  }, [sliderValues])

  useInterval(() => {
    if (animationArray.length <= 0) {
      (setState(prevState => ({
        ...prevState,
        isRunning: false,
        isSorted: true,
        comparedValues: [],
      })))
    }else{
      bubbleSwapAnimation(setState, animationArray, array)
    }
  }, isRunning ? ANIMTION_TIME : null);

  function pauseResume() {
    if (animationArray.length > 0) {
      setState(prevState => ({
        ...prevState,
        isRunning: !prevState.isRunning,
      }))
    }
  }

  return (
    <>
      <div className="sort-visualizer">
        {array.length && array.map((value, id) => (
          <div
            key={id}
            style={{
              backgroundColor:
              `${isSorted ? "#ff6e8d"
                : id === comparedValues[0] && !comparedValues[2] ? "#ff9f38"
                  : id === comparedValues[1] && !comparedValues[2] ? "#ff9f38"
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
        <Button variant="primary"
          onClick={() => handleResetArray(setState, sliderValues)}
        >
          Reset
        </Button>
        <Button variant="primary"
          onClick={() => setState(prevState => ({
            ...prevState, array: mergeSort(array)
          }))}
        >
          Merge Sort
        </Button>
        <Button variant="primary"
          onClick={() => { bubbleSort(array, setState) }}
        >
          Bubble Sort
        </Button>

        <Button variant="primary" onClick={() => pauseResume()}>
          {animationArray.length <= 0
            || animationArray.length > 0
              && isRunning ? "Pause" : "Resume"}
        </Button>

        <SliderContainer />
      </Navbar>
    </>
  )
}
        // <Button variant="primary" onClick={() => mergeTestSortingAlgorithms()}>Test Function</Button>
export default SortVisualizer
