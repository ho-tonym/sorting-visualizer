import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import { useStateValue } from '../../../MyProvider'
import 'rc-slider/assets/index.css';
import './slider.min.css'

export const SliderContainer = () => {
  const { slider, setSlider } = useStateValue()

  function handleSliderChange(sliderValues) {
    setSlider({ sliderValues });
  }
  const { sliderValues } = slider

  return(
    <div className="slider">
      <p>
        Array Size  +  Speed
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
