import React from 'react'
import styles from "./arrayBars.module.css";
import { useStateValue } from "../../../MyProvider";

function ArrayBars() {
  const { state } = useStateValue();
  const { array, comparedValues, isSorted } = state;
  const width = Math.floor(1000 / (array.length * 2));

  const [j, k, isHeightChange] = comparedValues || null

  return (
    <div className={styles.arrayBars}>
      {array.length && array.map((value, id) => (
        <div
          className={styles.transition}
          key={id}
          style={{
            backgroundColor:
            `${isSorted ? "#ff6e8d"
              : isHeightChange && (id === j || id === k) ? "#4d84fe"
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
