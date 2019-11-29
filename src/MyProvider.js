import React, { useState, useContext, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
  const [state, setState] = useState({
    array: [],
    animationArray: [],
    isSorted: false,
    isRunning: false,
    comparedValues: [],
  })

  const [slider, setSlider] = useState({
    sliderValues: 44,
  })

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
        slider,
        setSlider
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export const useStateValue = () => useContext(MyContext)
