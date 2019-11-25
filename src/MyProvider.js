import React, { useState, useContext, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [state, setState] = useState({
    array: [],
    permutationsToExecute: [],
    isSorted: false,
    isRunning: false,
    comparedValues: [],
  })

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export const useStateValue = () => useContext(MyContext)
