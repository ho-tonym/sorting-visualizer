import React, { useEffect } from 'react'
import './sort.min.css'
import { Navbar, Button } from 'react-bootstrap'
import { handleResetArray } from './utils'
import { useStateValue } from '../../MyProvider'
import useInterval from './hooks/useInterval'
import { SliderContainer } from './slider'

import { bubbleSort } from './algorithms/bubbleSort'
import { selectionSort } from './algorithms/selectionSort'
import { mergeSort } from './algorithms/mergeSort'
import { insertionSort } from './algorithms/insertionSort'
import { heapSort } from './algorithms/heapSort'
import { executeAnim } from './algorithms'

const ANIMTION_TIME = 100

function SortVisualizer() {
  const { state, setState, slider } = useStateValue()
  const { array, comparedValues, isRunning, isSorted, animationArray } = state
  const { sliderValues } = slider

  useEffect(() => {
    handleResetArray(setState, sliderValues)
  }, [sliderValues])

  useEffect(() => {
    console.log(animationArray)
  })

  useInterval(() => {
    if (animationArray.length > 0) {
      // executeBubbleAnim(setState, animationArray, array)
      executeAnim(setState, animationArray, array)
    } else {
      setState(prevState => ({ ...prevState,
        isRunning: false,
        isSorted: true,
        comparedValues: [],
      }))
    }
  }, isRunning ? ANIMTION_TIME : null);

  function pauseResume() {
    if (animationArray.length > 0) {
      setState(prevState => ({ ...prevState,
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
                      : "#2ad19d"
              }`,
              height: `${value}px`,
            }}
          />
        ))
      }
      </div>

      <Navbar className="nav justify-content-between" fixed="bottom" bg="dark" expand="lg">
        <div>
          <Button variant="primary"
            onClick={() => handleResetArray(setState, sliderValues)}
          >
            Reset
          </Button>

          <Button variant="primary" onClick={() => pauseResume()}>
            {animationArray.length <= 0
              || animationArray.length > 0
                && isRunning ? "Pause" : "Resume"}
          </Button>
        </div>
        <div>
          <Button variant="primary"
            onClick={() => { bubbleSort(array, setState) }}
          >
            Bubble Sort
          </Button>

          <Button variant="primary"
            onClick={() => { selectionSort(array, setState) }}
          >
            Select Sort
          </Button>

          <Button variant="primary"
            onClick={() => { insertionSort(array, setState) }}
          >
            Insert Sort
          </Button>

          <Button variant="primary"
            onClick={() => { heapSort(array, setState) }}
          >
            Heap Sort
          </Button>
        </div>
        <SliderContainer />
      </Navbar>
    </>
  )
}
        // <Button variant="primary" onClick={() => mergeTestSortingAlgorithms()}>Test Function</Button>
        // <Button variant="primary"
        //   onClick={() => setState(prevState => ({ ...prevState,
        //     array: mergeSort(array, setState)
        //   }))}
        // >
        //   Merge Sort
        // </Button>
export default SortVisualizer
