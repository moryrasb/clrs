/*
Selection Sort

Pseudocode:

SELECTION-SORT(A, n)
1. for i = 1 to n - 1
2.     minIndex = i
3.     for j = i + 1 to n
4.         if A[j] < A[minIndex]
5.             minIndex = j
6.     exchange A[i] ↔ A[minIndex]


Loop Invariant:
At the start of each iteration of the outer loop (index i), the subarray A[1 .. i−1] contains the i−1 smallest elements of the array, and they are in sorted order.

Proof of Correctness:

Initialization: Before the first iteration (i = 1), A[1 .. 0] is empty, which is trivially sorted. The invariant holds.

Maintenance: During iteration i, the algorithm finds the smallest element in A[i .. n] and swaps it with A[i]. Thus, A[1 .. i] now contains the i smallest elements in sorted order, so the invariant holds for the next iteration.

Termination: When the loop finishes (i = n), A[1 .. n−1] contains the n−1 smallest elements sorted, and the last element A[n] must be the largest. Hence the entire array is sorted.

Why the loop runs only to n−1:
After placing the first n−1 smallest elements, the last remaining element A[n] is automatically the largest one, so no need to process it.

Running Time:
The inner loop runs (n−i) times for each i.
Total comparisons = (n−1) + (n−2) + ... + 1 = n(n−1)/2.
Therefore, total running time T(n) = Θ(n²).

Best and Worst Case:
Selection sort always performs the same number of comparisons, regardless of the input order.

Best-case time: Θ(n²)
Worst-case time: Θ(n²)

Summary:
Algorithm: Selection Sort
Loop Invariant: A[1..i−1] is sorted and contains the i−1 smallest elements.
Why stop at n−1: The last element is automatically the largest.
Worst-case time: Θ(n²)
Best-case time: Θ(n²)

selection sort uses design pattern "incremental" method

* */

export const SelectionSort = (array, n) => {

    for (let i = 0; i < n; i++) {

        // find the smallest index
        let minIndex = i;
        for (let j = i+1; j <= n; j++) {
            if(array[minIndex]>array[j]){

                minIndex = j;

            }
        }
        //swap now
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

    }

}