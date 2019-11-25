import { randomInt, resetArray, swap } from '../../utils'
let interval


export function bubbleSort(setState, state, speed) {
  const arr = state.array.slice()
  const permutationsToExecute = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, stop = arr.length - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        permutationsToExecute.push([
          j, j + 1,
        ])
      }
    }
  }
}

function setIntervalAnimation(){
  setState({permutationsToExecute}, () => {
      interval = setInterval(executeAnimation(setState, state), speed)
  })
  return permutationsToExecute
}

//PUT BACK
function executeAnimation(setState, state) {
  const { permutationsToExecute, isRunning } = state
  if (!isRunning)
  {
    setState(prevState => ({
      ...prevState,
      isRunning: true
    }))
  }

  if (permutationsToExecute.length > 0) {
    bubbleSwapAnimation(permutationsToExecute[0][0], permutationsToExecute[0][1], setState)
  } else {
    clearInterval(interval);
    setState(prevState => ({
      ...prevState,
      isRunning: false,
      isSorted: true,
      comparedValues: [],
    }))
  }
}

//PUT BACK
function bubbleSwapAnimation(j, k, setState) {
  const { array } = this.state
  const tempArray = array.slice()
  const value = swap(tempArray, j, k)

  setState(prevState => ({
    ...prevState,
    array: value,
    permutationsToExecute: prevState.permutationsToExecute.slice(1),
    comparedValues: [j, k],
  }))
}
