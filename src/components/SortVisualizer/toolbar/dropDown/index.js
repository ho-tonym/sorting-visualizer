import React from 'react'
import { Dropdown } from "react-bootstrap";
import { useStateValue } from "../../../../MyProvider";

const DropDown = ({ sortingAlgo, array }) => {
  const { setState } = useStateValue();

  return (
    <Dropdown.Item
      onClick={() => {
        setState(prevState => ({ ...prevState,
          animArray: sortingAlgo(array),
          isRunning: true,
        }))
      }}
    >
      Merge Sort
    </Dropdown.Item>
  )
}

export default DropDown
