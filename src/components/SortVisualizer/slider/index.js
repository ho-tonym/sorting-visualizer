import React from 'react';
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
      <p style={{color: '#fff'}}>Number of Bars</p>

      <div style={wrapperStyle}>
        <Slider
          defaultValue={sliderValues}
          onChange={handleSliderChange}
          min={10}
          max={100}
        />
      </div>
    </div>
  )
}
