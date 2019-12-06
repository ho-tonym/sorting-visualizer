import React, { useEffect } from 'react'
import './toolbar.min.css'
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
import { algorithms } from './data/algorithms'
import { executeAnim } from "../../../algorithms";
import { resetArray } from "../../../utils"
import useInterval from "../../../hooks/useInterval";

function Toolbar() {
  const { state, setState, slider } = useStateValue();
  const { array, isRunning, animArray } = state
  const { sliderValues } = slider;
  const speed = 600 - (array.length / 2) ** 2 > 0
    ? 600 - (array.length * 0.55) ** 2
    : 0;

  useEffect(() => {
    handleResetArray(sliderValues)
  }, [sliderValues])
  // const speed = 500
  // useEffect(() => {
  //   handleResetArray(10)
  // }, [sliderValues])



  useInterval(() => {
    if (animArray.length > 0) {
      executeAnim(setState, animArray, array)
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
    if (animArray.length > 0) {
      setState(prevState => ({ ...prevState,
        isRunning: !prevState.isRunning,
      }))
    }
  }

  function doSetState(sortingAlgo) {
    setState(prevState => ({ ...prevState,
      animArray: sortingAlgo(array),
      isRunning: true,
    }))
  }

  return (
    <ButtonToolbar className="justify-content-between">
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title="Pick a Sorting Algorithm" id="bg-nested-dropdown">
          {algorithms.map(e => (
            <Dropdown.Item
              onClick={() => { doSetState(e.algo) }}
              key={e.title}
            >
              {e.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Button variant="primary"
          onClick={() => handleResetArray(sliderValues)}
        >
          Reset
        </Button>
        <Button variant="primary" onClick={pauseResume}>
          {animArray.length <= 0 || (animArray.length > 0
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
