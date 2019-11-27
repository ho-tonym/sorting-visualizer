let length;
let animationArray;

function heap_root(array, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < length && array[left] > array[max]) {
      max = left;
  }

  if (right < length && array[right] > array[max])     {
      max = right;
  }

  if (max != i) {
      swap(array, i, max);
      animationArray.push([
        i, max, true,
      ])
      heap_root(array, max);
  }
}

function swap(input, index_A, index_B) {
  var temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

export const heapSort = (arr, setState) => {
  const array = [...arr]
  length = array.length;
  animationArray = []
  for (var i = Math.floor(length / 2); i >= 0; i -= 1)      {
      heap_root(array, i);
    }

  for (i = array.length - 1; i > 0; i--) {
      swap(array, 0, i);
      animationArray.push([
        0, i, true,
      ])
      length--;

      heap_root(array, 0);
  }

  setState(prevState => ({ ...prevState,
    animationArray,
    isRunning: true,
  }))
}
