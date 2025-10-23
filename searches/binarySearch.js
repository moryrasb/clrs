/*
* BINARY-SEARCH(A, v)
1. low = 1
2. high = length[A]
3. while low ≤ high
4.     mid = ⌊(low + high) / 2⌋
5.     if A[mid] == v
6.         return mid
7.     else if A[mid] > v
8.         high = mid - 1
9.     else
10.        low = mid + 1
11. return NIL
Explanation:
Binary search works only on a sorted array.
At each iteration, the algorithm compares the target value v with the middle element of the current subarray:

If A[mid] == v, the search is successful.

If A[mid] > v, the element (if present) must be in the left half of the array.

If A[mid] < v, the element (if present) must be in the right half of the array.

By discarding half of the array on each step, the problem size reduces by a factor of 2 every time.

Loop Invariant:
At the start of each iteration of the while loop,
if v is in the array A, then it is within the subarray A[low..high].

Initialization:
Before the first iteration, low = 1 and high = n,
so the entire array is under consideration — the invariant holds.

Maintenance:
Each iteration halves the range by setting high = mid - 1 or low = mid + 1,
thus preserving the invariant.

Termination:
When the loop terminates, either the element is found (A[mid] == v),
or the range becomes empty (low > high), meaning the element is not in the array.

Worst-Case Running Time Analysis:

Let T(n) be the worst-case running time for an array of size n.

At each iteration:

The array is divided into two halves → size reduces from n to n/2

Constant time work (comparison and index adjustment)

Hence,
T(n) = T(n/2) + Θ(1)

Solving this recurrence (using the Master Theorem or repeated substitution):

r
Copy code
T(n) = Θ(log n)
Conclusion:
The worst-case running time of binary search is Θ(log n),
and the best case (when the middle element is found on the first check) is Θ(1).

✅ Final Answer Summary

Algorithm: Binary Search

Works on: Sorted arrays

Best case: Θ(1)

Worst case: Θ(log n)

Loop invariant: The target value, if present, is always within A[low..high].
*
* binary search using iterative method
*
* */

export const iterativeSearch = (arr, item) => {

    let low = 0;
    let high = arr.length;


    while(low < high){
        let mid = Math.floor((low + high)/2);
        if(arr[mid] === item){
            return mid;
        }
        else if(arr[mid] > item){
            high = mid-1;
        }
        else if(arr[mid] < item){
            low = mid+1;
        }
    }
    return null;


}


/*
*
* Recursive Pseudocode:

BINARY-SEARCH(A, low, high, v)
1. if low > high
2.     return NIL        // base case: subarray is empty
3. mid = ⌊(low + high) / 2⌋
4. if A[mid] == v
5.     return mid        // element found
6. else if A[mid] > v
7.     return BINARY-SEARCH(A, low, mid - 1, v)   // search left half
8. else
9.     return BINARY-SEARCH(A, mid + 1, high, v)  // search right half


Explanation:

This is a divide and conquer algorithm:

Divide: Find the midpoint mid of the current subarray.

Conquer: Recursively search in the left half or right half depending on whether v is smaller or larger than A[mid].

Combine: There’s no combination step here — once we find the element, we return it.

At every recursive call, the array size is reduced by half (either [low..mid−1] or [mid+1..high]).

Base Case:
If low > high, the subarray is empty → the element does not exist → return NIL.

Recurrence Relation:

Let T(n) be the time to search in a subarray of size n.

At each step:

We do constant work (computing mid, comparison)

We make one recursive call on a subarray of size n/2

So the recurrence is:

T(n) = T(n/2) + Θ(1)


Solving the Recurrence:

By repeated substitution or the Master Theorem:

T(n) = Θ(log n)


Thus, binary search grows logarithmically with input size.

Divide and Conquer Structure:

Step	Action	Subproblem Size	Work per Call	Total Work
Divide	Compute mid	n	Θ(1)	Θ(1)
Conquer	Search one half	n/2	T(n/2)	T(n/2)
Combine	None	—	Θ(1)	—

Total work = T(n/2) + Θ(1) ⇒ Θ(log n)

Final Summary:

✅ Algorithm: Recursive Binary Search
✅ Approach: Divide and Conquer
✅ Best Case: Θ(1)
✅ Worst Case: Θ(log n)
✅ Average Case: Θ(log n)
✅ Space Complexity: Θ(log n) (due to recursion stack)
*
* */


export const recursiveSearch = (arr,low,high, item) => {

    if(low >  high) return null;

    let mid = Math.floor((low + high)/2);

    if(arr[mid] === item){
        return mid;
    }
    else if(arr[mid] > item){
       return recursiveSearch(arr,low, mid-1,item);
    }
    else if(arr[mid] < item){
        return recursiveSearch(arr,mid+1,high,item);
    }

}