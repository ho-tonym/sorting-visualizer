import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import { useStateValue } from '../../../MyProvider'

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
