import React, { useEffect } from 'react'
import './sort.min.css'
import { Navbar, Button, ButtonGroup, Dropdown, DropdownButton, ButtonToolbar } from 'react-bootstrap'
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

function SortVisualizer() {
  const { state, setState, slider } = useStateValue()
  const { array, comparedValues, isRunning, isSorted, animationArray } = state
  const { sliderValues } = slider
  const speed = 600 - Math.pow(array.length, 2) > 0 ? 600 - Math.pow(array.length, 2) : 0;

  useEffect(() => {
    handleResetArray(setState, sliderValues)
  }, [sliderValues])

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
  }, isRunning ? speed : null);

// 10 => 100
// 10 => 500
// 100 => 10

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
                      : "#636363"
              }`,
              height: `${value}px`,
            }}
          />
        ))}
      </div>

      <ButtonToolbar className="justify-content-between">
        <ButtonGroup>
          <DropdownButton as={ButtonGroup} title="Pick a Sorting Algorithm" id="bg-nested-dropdown">
            <Dropdown.Item onClick={() => { bubbleSort(array, setState) }}>Bubble Sort</Dropdown.Item>
            <Dropdown.Item onClick={() => { selectionSort(array, setState) }}>Select Sort</Dropdown.Item>
            <Dropdown.Item onClick={() => { insertionSort(array, setState) }}>Insert Sort</Dropdown.Item>
            <Dropdown.Item onClick={() => { heapSort(array, setState) }}>Heap Sort</Dropdown.Item>
          </DropdownButton>
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
        </ButtonGroup>
        <ButtonGroup>
          <SliderContainer />
        </ButtonGroup>
      </ButtonToolbar>
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
