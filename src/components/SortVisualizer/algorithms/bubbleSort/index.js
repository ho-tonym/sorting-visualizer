export function swap(array, j, k) {
  const tempElement = array[j];
  array[j] = array[k];
  array[k] = tempElement;
  return array
}
