export const getInsertSortAnim = (array) => {
  const arr = [...array]
  const length = arr.length;
  const animationArray = []

  for (let i = 0; i < length; i++) {
    const element = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > element; j--) {
      arr[j + 1] = arr[j];
      animationArray.push([
        j + 1, j, true,
        // j, j+1 , i
      ])
    }
    arr[j + 1] = element;
  }

  return animationArray
};