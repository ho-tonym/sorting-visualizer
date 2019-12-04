import React, { useEffect } from 'react'
import './toolbar.min.css'
import { useStateValue } from "../../../MyProvider"
import { executeAnim } from "../../../algorithms";
import { resetArray } from "../../../utils"
import useInterval from "../../../hooks/useInterval";
import Toolbar from './index'

function ToolbarContainer() {
  const { state, setState, slider } = useStateValue();
  const { array, isRunning, animArray } = state
  const { sliderValues } = slider;
  const speed = 600 - (array.length / 2) ** 2 > 0
    ? 600 - (array.length * 0.55) ** 2
    : 0;

  useEffect(() => {
    handleResetArray(sliderValues)
  }, [sliderValues])

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

  return(
    <Toolbar

    />
  )
}

export default ToolbarContainer
