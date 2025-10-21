/*
* Merge Sort Analysis

Merge Sort works on the Divide and Conquer principle:

Divide: Split the array into two halves.

Conquer: Recursively sort both halves.

Combine: Merge the two sorted halves into one sorted array.

Time Complexity Analysis

Let T(n) be the running time of merge sort on an input of size n.

For an array of size n:

We divide it into two subarrays of size n/2 each → Divide step → cost = Θ(1)

We recursively sort each half → Conquer step → cost = 2 × T(n/2)

We merge the two sorted halves → Combine step → cost = Θ(n)

So the recurrence relation is:

T(n) = 2T(n/2) + Θ(n)

Solving the Recurrence

Using the Master Theorem:

T(n) = aT(n/b) + f(n)

where
a = 2 (two recursive calls)
b = 2 (each on half the input)
f(n) = Θ(n)

Compute n^(log_b a) = n^(log_2 2) = n

Since f(n) = Θ(n), this is Case 2 of the Master Theorem.
Therefore:

T(n) = Θ(n log n)

Final result:

T(n) = Θ(n log n)

Best, Average, and Worst Case

Merge sort always performs the same operations regardless of input order.

Best Case: Θ(n log n)
Average Case: Θ(n log n)
Worst Case: Θ(n log n)

Space Complexity

Merge Sort requires additional temporary arrays for merging.

Space Complexity = Θ(n)
It is not an in-place algorithm.

Growth Rate Summary

Input size (n)	Approximate operations	Growth trend
1,000	~10,000	small
10,000	~133,000	moderate
1,000,000	~20,000,000	grows slowly (log factor)

Because the logarithmic term grows slowly, merge sort remains efficient even for large inputs.

Recursion Tree Intuition

Level 0: n work → Θ(n)
Level 1: 2 × (n/2) → Θ(n)
Level 2: 4 × (n/4) → Θ(n)
...
Level log₂n: n × (1/n) → Θ(n)

At each level, total work = Θ(n).
There are log₂n levels.
Total work = Θ(n log n)

Summary Table

Aspect	Merge Sort
Strategy	Divide and Conquer
Recurrence	T(n) = 2T(n/2) + Θ(n)
Time Complexity	Θ(n log n)
Space Complexity	Θ(n)
Stability	Stable
In-place	No
Adaptivity	No (input order doesn’t affect runtime)

Merge sort uses Method "divide and conquer" method
*
*
*
* */


function merge(A, p, q, r) {
    const nL = q - p + 1; // length of left subarray
    const nR = r - q;     // length of right subarray

    // Step 3: Create new arrays L and R
    const L = new Array(nL);
    const R = new Array(nR);

    // Step 4–5: Copy A[p..q] into L[0..nL−1]
    for (let i = 0; i < nL; i++) {
        L[i] = A[p + i];
    }

    // Step 6–7: Copy A[q+1..r] into R[0..nR−1]
    for (let j = 0; j < nR; j++) {
        R[j] = A[q + 1 + j];
    }

    // Step 8–10: Initialize pointers
    let i = 0;
    let j = 0;
    let k = p;

    // Step 11–18: Merge the two subarrays
    while (i < nL && j < nR) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
        k++;
    }

    // Step 19–23: Copy any remaining elements from L
    while (i < nL) {
        A[k] = L[i];
        i++;
        k++;
    }

    // Step 24–27: Copy any remaining elements from R
    while (j < nR) {
        A[k] = R[j];
        j++;
        k++;
    }
}

export function mergeSort(A, p, r) {
    // Step 1–2: Base case
    if (p >= r) {
        return;
    }

    // Step 3: Find midpoint
    const q = Math.floor((p + r) / 2);

    // Step 4–6: Recursively sort both halves
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);

    // Step 7: Merge the two sorted halves
    merge(A, p, q, r);
}