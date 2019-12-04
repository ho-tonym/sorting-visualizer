import React from "react";
import "./sort.min.css";
import { useStateValue } from "../../MyProvider";
import Toolbar from './Toolbar'

function SortVisualizer() {
  const { state } = useStateValue();
  const { array, comparedValues, isSorted } = state;
  const width = Math.floor(1000 / (array.length * 2));

  const [j, k, heightChange] = comparedValues || null
  return (
    <>
      <div className="sort-visualizer">
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
      <Toolbar />
    </>
  )
}

export default SortVisualizer
