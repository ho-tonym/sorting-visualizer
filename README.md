# Sorting Visualizer

This repo was a way for me to learn more about sorting algorithms and help others understand the differences between some of the more popular ones. Feel free to play around with it!

## Algorithms
SORT smallest to largest

bubble : compare with each element next to it and swap if it is smaller until it is in the correct spot. so we end up with the largest on the right
On^2

selection: go through the array, find the smallest one and swap it with the next element in order in the iteration

insert:

heap:

quick: good for large datasets. recursion, divide and conquer
worst - o^n2
o n log n

merge: single threaded, when it is done it flies off the callstack. each recursive function is put on the stack until it is resolved to a value that merge can use
half array over and over until we have 1 element, then it flies off the stack and we call the merge function on it. We make a a comparison of which one is smaller and add that to a temporary array and concat the rest to that array. we do that to the other side of the arguments for that recursive function then keep working our way up until we get the result.

insert: start at position 0, 1. we take a look at 1 and see if it is smaller than 0, if it is swap it. we continue swapping it left until it is in the correct position. so it we are checking index 5, we will theoretically check it against 4,3,2,1,0 until we reach a number that is smaller than array[5], in which case we will stop, since all the elements to the left are correctly sorted.
