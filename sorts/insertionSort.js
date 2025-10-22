//  efficient algorithm for sorting a small number of elements
// elements a[0] to a[i-1] is our loop invariant
// best case the input array is already sorted: linear function o(n). worst case the input array is reverse sorted quadratic function o(n2)
// average case input array is some random placed numbers and its quadratic function o(n2)

// insertion sort uses design pattern "incremental" method

export const insertionSortWhile = (array, n) => {
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i-1;
        while (j>=0 && array[j]>key) {
            array[j+1] = array[j];
            j--;
             }
        array[j+1] = key;
    }
};
export const insertionSortFor = (array, n) => {
    for(let i= 1; i<n; i++){
        let key = array[i];
        for (let j = i-1; j>=0; j--){
            if(array[j]>key){
                array[j+1] = array[j];
                array[j] = key;
            }
            else {
                break;
            }
        }
    }
}

export const insertionSortDescending= (array, n) => {
    for(let i=1; i<n; i++){
        let key = array[i];
        for (let j = i-1; j>=0; j--){
            if(array[j]<key){
                array[j+1] = array[j];
                array[j] = key;

            }
            else {
                break;
            }
        }
    }
}

/*
* Recursive Insertion Sort – Analysis

To sort the array A[1..n], the recursive insertion sort first sorts the subarray A[1..n−1] recursively, and then inserts the element A[n] into its correct position within the sorted subarray.

Let T(n) denote the running time of the recursive insertion sort on an array of size n.

The algorithm performs two main steps:

A recursive call to sort the first n−1 elements, which takes time T(n−1).

An insertion step, which in the worst case requires comparing and shifting up to n−1 elements, taking Θ(n) time.

Thus, the recurrence relation for the worst-case running time is:

T(n) = T(n−1) + Θ(n)

Solving the Recurrence:

Expanding the recurrence:

T(n) = T(n−1) + c·n
= (T(n−2) + c·(n−1)) + c·n
= (T(n−3) + c·(n−2)) + c·(n−1) + c·n
= …
= T(1) + c(2 + 3 + 4 + … + n)

The summation (2 + 3 + … + n) = (n(n+1)/2) − 1 = Θ(n²)

Therefore,
T(n) = Θ(n²)

Best-case Analysis:

In the best case (when the array is already sorted), each insertion takes only one comparison and no shifts.
So the recurrence becomes:

T(n) = T(n−1) + Θ(1)
⇒ T(n) = Θ(n)
*
* we are using divide and conquer method approach for this
*
* */



export function recursiveInsertionSort(A, n = A.length) {
    // Base case: a single element is already sorted
    if (n <= 1) return;

    // Recursively sort the first n-1 elements
    recursiveInsertionSort(A, n - 1);

    // Insert the nth element into the sorted subarray A[0..n-2]
    const key = A[n - 1];
    let i = n - 2;

    // Move elements that are greater than key one position ahead
    while (i >= 0 && A[i] > key) {
        A[i + 1] = A[i];
        i--;
    }

    // Place the key in its correct position
    A[i + 1] = key;
}