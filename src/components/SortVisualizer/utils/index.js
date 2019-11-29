function resetArray(count) {
  const array = []
  for (let i = 0; i < count; i++) {
    array.push(randomInt(5, 400))
  }
  return array
}

export const swap = (array, j, k) => {
  const tempElement = array[j];

  array[j] = array[k];
  array[k] = tempElement;
  return array
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

export function handleResetArray(setState, sliderValues) {
  const array = resetArray(sliderValues)
  setState(prevState => ({
    ...prevState,
    array,
    isSorted: false,
    isRunning: false,
    comparedValues: [],
  }))
}
