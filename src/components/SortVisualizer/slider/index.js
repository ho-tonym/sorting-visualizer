import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import { useStateValue } from '../../../MyProvider'

const wrapperStyle = { width: '100%', margin: 10 };

export const SliderContainer = () => {
  const { slider, setSlider } = useStateValue()

  function handleSliderChange(sliderValues) {
    setSlider({ sliderValues });
  }
  const { sliderValues } = slider
  return(
    <div className="slider" style={wrapperStyle}>
      <p style={{color: '#fff'}}>
      Number of Bars
      </p>
      <Slider
        defaultValue={sliderValues}
        onChange={handleSliderChange}
        min={10}
        max={100}
      />
    </div>
  )
}
