import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  ButtonToolbar,
} from "react-bootstrap";
import { useStateValue } from "../../../MyProvider"
import { SliderContainer } from "./slider";
import {
  getMergeSortAnim,
  getQuickSortAnim,
  getBubbleSortAnim,
  getHeapSortAnim,
  getSelectSortAnim,
  getInsertSortAnim,
  executeAnim,
} from "../../../algorithms";
import { resetArray } from "../../../utils"
import useInterval from "../../../hooks/useInterval";

function Toolbar() {
  const { state, setState, slider } = useStateValue();
  const { array, isRunning, animationArray } = state
  const { sliderValues } = slider;
  const speed = 600 - (array.length / 2) ** 2 > 0
    ? 600 - (array.length * 0.55) ** 2
    : 0;

  useEffect(() => {
    handleResetArray(sliderValues)
  }, [sliderValues])

  useInterval(() => {
    if (animationArray.length > 0) {
      executeAnim(setState, animationArray, array)
    } else {
      setState(prevState => ({ ...prevState,
        isRunning: false,
        isSorted: true,
        comparedValues: [],
      }))
    }
  }, isRunning ? speed : null);

  function handleResetArray(count) {
    setState(prevState => ({
      ...prevState,
      array: resetArray(count),
      isSorted: false,
      isRunning: false,
      comparedValues: [],
    }))
  }

  function pauseResume() {
    if (animationArray.length > 0) {
      setState(prevState => ({ ...prevState,
        isRunning: !prevState.isRunning,
      }))
    }
  }

  function doSetState(sortingAlgo) {
    setState(prevState => ({ ...prevState,
      animationArray: sortingAlgo(array),
      isRunning: true,
    }))
  }

  function handleResetArray(count) {
    setState(prevState => ({
      ...prevState,
      array: resetArray(count),
      isSorted: false,
      isRunning: false,
      comparedValues: [],
    }))
  }

  return (
    <ButtonToolbar className="justify-content-between">
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title="Pick a Sorting Algorithm" id="bg-nested-dropdown">
          <Dropdown.Item
            onClick={() => { doSetState(getMergeSortAnim) }}
          >
            Merge Sort
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => { doSetState(getQuickSortAnim) }}
          >
            Quick Sort
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              doSetState(getBubbleSortAnim)
            }}
          >
            Bubble Sort
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              doSetState(getSelectSortAnim)
            }}
          >
            Select Sort
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              doSetState(getInsertSortAnim)
            }}
          >
            Insert Sort
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              doSetState(getHeapSortAnim)
            }}
          >
            Heap Sort
          </Dropdown.Item>
        </DropdownButton>
        <Button variant="primary"
          onClick={() => handleResetArray(sliderValues)}
        >
          Reset
        </Button>
        <Button variant="primary" onClick={() => pauseResume()}>
          {animationArray.length <= 0 || (animationArray.length > 0
              && isRunning) ? "Pause" : "Resume"}
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <SliderContainer />
      </ButtonGroup>
    </ButtonToolbar>
  )
}

export default Toolbar
