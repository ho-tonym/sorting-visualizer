# Sorting Visualizer

This repo was a way for me to learn more about sorting algorithms and help others understand the differences between some of the more popular ones. Feel free to play around with it!

## Algorithms
SORT smallest to largest

bubble : compare with each element next to it and swap if it is smaller until it is in the correct spot. so we end up with the largest on the right
On^2

selection: go through the array, find the smallest one and swap it with the next element in order in the iteration

insert: start left ot right. compare each item to its left, if there is an element on the left. if the current number is smaller than the number on the left it will be swapped, and keep going until it is inserted in the correct position.



heap: ordered binary tree. max heap has restrition: value of parent nodes are greater than value of child nodes

we continually create max heaps to find the largest item. we remove that item from the heap and into a sorted partition
we swap the largest item with the item at the end and assume its sorted. we remove it from the tree/ array

call heapify because thats the item that is out of place. that number moves floats down. 1 floats down and the lasrgest number floats to top.
now we have max heap again and we swap it with the last 2nd to last element

(2 swaps) - at the end when in position, or when we are heapifying
>>
create tree from array
rearrange parent so they are > than child nodes
swap root with the last node and delete the last node(largest #)

O(nlogn)
build max heap = O(n)
heapify = O(logn) called n-1 times
------

quick: good for large datasets. recursion, divide and conquer
select a "random pivot element
compare all elements with the pivot and swap elements to left if less and to right if greater
- perform the same actions on left and right side elements to pivot
- all performed on the same array, with no new arrays created


worst - o^n2
o n log n

merge: single threaded, when it is done it flies off the callstack. each recursive function is put on the stack until it is resolved to a value that merge can use
half array over and over until we have 1 element, then it flies off the stack and we call the merge function on it. We make a a comparison of which one is smaller and add that to a temporary array and concat the rest to that array. we do that to the other side of the arguments for that recursive function then keep working our way up until we get the result.

insert: start at position 0, 1. we take a look at 1 and see if it is smaller than 0, if it is swap it. we continue swapping it left until it is in the correct position. so it we are checking index 5, we will theoretically check it against 4,3,2,1,0 until we reach a number that is smaller than array[5], in which case we will stop, since all the elements to the left are correctly sorted.
