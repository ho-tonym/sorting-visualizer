import React from 'react'
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  ButtonToolbar,
} from "react-bootstrap";

const AlgoButtons = ({ getMergeSortAnim, getQuickSortAnim, getBubbleSortAnim, getSelectSortAnim, getInsertSortAnim, getHeapSortAnim, array, setState}) => (
  <DropdownButton as={ButtonGroup} title="Pick a Sorting Algorithm" id="bg-nested-dropdown">
    <Dropdown.Item
      onClick={() => {
        setState(prevState => ({ ...prevState, animationArray: getMergeSortAnim(array), isRunning: true }))
      }}
    >
      Merge Sort
    </Dropdown.Item>
    <Dropdown.Item
      onClick={() => {
        setState(prevState => ({ ...prevState, animationArray: getQuickSortAnim(array), isRunning: true }))
      }}
    >
      Quick Sort
    </Dropdown.Item>
    <Dropdown.Item
      onClick={() => {
        setState(prevState => ({ ...prevState, animationArray: getBubbleSortAnim(array), isRunning: true }))
      }}
    >
      Bubble Sort
    </Dropdown.Item>
    <Dropdown.Item
      onClick={() => {
        setState(prevState => ({ ...prevState, animationArray: getSelectSortAnim(array), isRunning: true }))
      }}
    >
      Select Sort
    </Dropdown.Item>
    <Dropdown.Item
      onClick={() => {
        setState(prevState => ({ ...prevState, animationArray: getInsertSortAnim(array), isRunning: true }))
      }}
    >
      Insert Sort
    </Dropdown.Item>
    <Dropdown.Item
      onClick={() => {
        setState(prevState => ({ ...prevState, animationArray: getHeapSortAnim(array), isRunning: true }))
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
)

export default AlgoButtons
