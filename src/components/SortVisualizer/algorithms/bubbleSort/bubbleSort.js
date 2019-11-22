const ANIMTION_TIME = 100
// ADD IN FINISHED COLOR
const delay = function() {
  const arrayQueue = [];

  function processQueue() {
    if (arrayQueue.length > 0) {
      setTimeout(function () {
        arrayQueue.shift().cb();
        processQueue();
      }, arrayQueue[0].delay);
    }
  }

  return function delay(delay, cb) {
    arrayQueue.push({ delay: delay, cb: cb });

    if (arrayQueue.length === 1) {
      processQueue();
    }
  };
}();

function swap(array, j, k) {
  const tempArray = array[j];
  array[j] = array[k];
  array[k] = tempArray;
}

let numberToAdjust = 0
let lastNumber = 0
let currentIteration = 0

function swapAnimation(array, j, k) {
  const arrayBars = document.getElementsByClassName('sort-visualizer');

  let barOneStyle = arrayBars[0].childNodes[j].style
  let barTwoStyle = arrayBars[0].childNodes[k].style

  barOneStyle["background-color"] = "#4d84fe";
  barTwoStyle["background-color"] = "#4d84fe";
  setTimeout(function () {
    barOneStyle["background-color"] = "#2ad19d";
    barTwoStyle["background-color"] = "#2ad19d";

    let tempHeight = barOneStyle["height"]
    barOneStyle["height"] = barTwoStyle["height"]
    barTwoStyle["height"] = tempHeight


    if (k >= lastNumber){
      //NOT BEING CALLED ENOUGH
      // console.log("j: "+ j, "k: " + k, "lastNumber: "+ lastNumber, "numberToAdjust: "+ numberToAdjust)
      lastNumber = k
    }
    else{
      // console.log("j: "+ j, "k: " + k, "lastNumber: "+ lastNumber, "numberToAdjust: "+ numberToAdjust + "c")
      arrayBars[0].childNodes[numberToAdjust].style["background-color"] = "#ff9f38";
      numberToAdjust--
      lastNumber = 0
    }
    currentIteration++
    // console.log(maxIterations, currentIteration)
    if(currentIteration === maxIterations){
      for (var i = 0; i < arrayBars[0].childNodes.length; i++) {
        arrayBars[0].childNodes[i].style["background-color"] = "#ff9f38";
      }
    }
  }, ANIMTION_TIME)
}


let maxIterations = 0
export function bubbleSort(arr) {
  numberToAdjust = arr.length - 1
  arr = arr.slice()
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, stop = arr.length - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        maxIterations++
        delay(ANIMTION_TIME, function(i, j) {
          return function() {
            swapAnimation(arr, j, j + 1);
          };
        }(i, j));
      }
    }
  }
  console.log()
}
