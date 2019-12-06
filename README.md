# Sorting Visualizer

This repo was a way for me to learn more about sorting algorithms and help others understand the differences between some of the more popular ones. Feel free to play around with it!

## Algorithms
- Bubble : For each element, iterate through and swap elements that are not in order. We end up with the largest element on the right side of the unsorted section at the end of each iteration.

- Selection: Loop through the array, and find the smallest element. Place it at the beginning of the unsorted section of the array.

- Insert: Start on the left. Iterate through each element and compare each to it's left adjacent element. If the current element is smaller than the element on the left, we swap. Repeat until the current element is larger than the left element.

- Heap: The structure follows an ordered binary tree. Where each parent node has a greater than each of the child nodes.

We continually create max heaps to find the largest item and remove that item from the heap into a sorted partition. To do so we call heapify which swap child and parent elements until the largest number is the root, and smallest number is the last element of the array. Finally swap the root with the last node and delete the last node. The last node is the largest #, and gets placed in the sorted section.

- Quick: Divide and conquer. Recursively pick an arbitrary point in the array while putting the smaller elements on one side and larger elements on the other side of the pivot. Figure out where that pivot ended up. Then we quick sort both sides again.

- Merge: Divide and Conquer. We split the array in halves recursively until it can't be divided. We compare the first element of both left and right half pushing the smaller element of the two onto a new array. We end up with a merge list of the two halves in sorted order.
