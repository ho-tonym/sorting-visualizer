import { swap } from '../../utils'

export const mergeSort = (array, setState) => {
  const arrayCopy = [...array];
  if (arrayCopy.length <= 1) {
    // console.log(array)
    return array;
  }
  const length = arrayCopy.length;
  const middle = Math.floor(length / 2);
  const left = arrayCopy.slice(0, middle);
  const right = arrayCopy.slice(middle);

  // let result = await mergeHelper(setState, mergeSort(left), mergeSort(right));
  mergeHelper(setState, mergeSort(left), mergeSort(right));
  // setState(prevState => ({ ...prevState,
  //   isRunning: true,
  // }))
  // console.log(ARRAY)
};
let ARRAY = []
const mergeHelper = (setState, left, right) => {
  console.log(left,right)
  const animationArray = [];
  while (left.length && right.length) { //check if either are 0 (falsey)
    if (left[0] <= right[0]) {
      animationArray.push(left.shift());
      ARRAY.push(left.shift());
    }
    else {
      animationArray.push(right.shift());
      ARRAY.push(right.shift());
    }
  }
  // setState(prevState => ({ ...prevState,
  //   animationArray: [...prevState.animationArray, ...animationArray]
  // }))
  ARRAY.concat(left, right);
  return animationArray.concat(left, right);
};
//
// export const executeMergeAnim = (setState, pArray, array) => {
//   const j = pArray[0][0]
//   const k = pArray[0][1]
//   const bool = pArray[0][2]
//
//   const tempArray = [...array]
//   let value = tempArray
//   if (bool) {
//
//     if (j[0] <= k[0]) {
//       animationArray.push(j.shift());
//     }
//     else {
//       animationArray.push(k.shift());
//     }
//
//   return animationArray.concat(left, right);
//
//     value = swap(tempArray, j, k)
//   }
//
//   setState(prevState => ({ ...prevState,
//     array: value,
//     animationArray: prevState.animationArray.slice(1),
//     comparedValues: [j, k, bool],
//   }))
// }
//
//
//
