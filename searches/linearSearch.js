/*
1. Initialization

Before the first iteration (i = 1):

The subarray A[1 .. i−1] is empty.

Therefore, x is trivially not present in it.

✅ The invariant holds before the loop starts.

2. Maintenance

Assume the invariant holds at the start of iteration i, i.e.
x does not appear in A[1 .. i−1].

Now we test A[i]:

Case 1: If A[i] == x, the algorithm returns i.
→ The output is correct because we found an index where A[i] = x.

Case 2: If A[i] ≠ x, then after this iteration,
we move to i + 1.
Now x does not appear in A[1 .. i], since it wasn’t in A[1 .. i−1] (by invariant) and isn’t equal to A[i].
Therefore, the invariant holds for the next iteration.

✅ The invariant is maintained.

3. Termination

The loop terminates when i > n, meaning we have checked every element A[1 .. n].

By the invariant, x does not appear in A[1 .. n].

Therefore, the algorithm correctly returns NIL.

✅ The algorithm is correct upon termination.

 */

export const linearSearch = (array, x) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return i;
        }

    }
    return null;

}