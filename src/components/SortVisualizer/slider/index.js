import React, { useState } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import { useStateValue } from '../../../MyProvider'

const wrapperStyle = { width: 400, margin: 50 };

export const SliderContainer = () => {
  const { slider, setSlider } = useStateValue()

  function handleSliderChange(sliderValues) {
    setSlider({ sliderValues });
  }
  const { sliderValues } = slider
  return(
    <div style={wrapperStyle}>
      <p>Number of Bars</p>
      <Slider
        min={10}
        defaultValue={sliderValues}
        marks={{
          10: 10,
          20: 20,
          30: 30,
          40: 40,
          50: 50,
          60: 60,
          70: 70,
          80: 80,
          90: 90,
          100: 100,
        }}
        onChange={handleSliderChange}
        step={null}
      />
    </div>
  )
}
