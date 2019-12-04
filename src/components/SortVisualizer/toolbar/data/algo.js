import {
  getMergeSortAnim,
  getQuickSortAnim,
  getBubbleSortAnim,
  getHeapSortAnim,
  getSelectSortAnim,
  getInsertSortAnim,
} from "../../../../algorithms";

export const algorithms = [
  { title: "Merge Sort", algo: getMergeSortAnim },
  { title: "Quick Sort", algo: getQuickSortAnim },
  { title: "Bubble Sort", algo: getBubbleSortAnim },
  { title: "Select Sort", algo: getSelectSortAnim },
  { title: "Insert Sort", algo: getInsertSortAnim },
  { title: "Heap Sort", algo: getHeapSortAnim },
]
