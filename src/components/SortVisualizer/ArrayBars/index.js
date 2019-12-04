import "./arrayBars.min.css";
import React from 'react'
// import PropTypes from 'prop-types'
import { useStateValue } from "../../../MyProvider";

function ArrayBars() {
  const { state } = useStateValue();
  const { array, comparedValues, isSorted } = state;
  const width = Math.floor(1000 / (array.length * 2));

  const [j, k, heightChange] = comparedValues || null

  return (
    <div className="array-bars">
      {array.length && array.map((value, id) => (
        <div
          key={id}
          style={{
            backgroundColor:
            `${isSorted ? "#ff6e8d"
              : heightChange && (id === j || id === k) ? "#4d84fe"
                : id === j || id === k
                  ? "#ff9f38" : "#636363"
            }`,
            height: `${value}px`,
            width: `${width}px`,
          }}
        />
      ))}
    </div>
  )
}

export default ArrayBars
