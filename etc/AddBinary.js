/*
✅ Loop Invariant

Loop invariant:
At the start of each iteration of the for loop (before processing bit i),
carry and C[0..i−1] together represent the correct binary sum of the lower i bits of A and B.

Formally:
Σ (from k = 0 to i−1) [ C[k] * 2^k ] + carry * 2^i = Σ (from k = 0 to i−1) [ (A[k] + B[k]) * 2^k ]

🧩 Proof of Correctness

1. Initialization

Before the first iteration (i = 0):
No bits have been processed yet.
C[0..−1] is empty.
carry = 0.

So the invariant holds, because 0 = 0.

✅ Initialization is correct.

2. Maintenance

Assume the invariant holds at the start of iteration i.
We process the next bits A[i] and B[i] and the current carry.

We compute:
sum = A[i] + B[i] + carry
C[i] = sum mod 2
carry = floor(sum / 2)

This is equivalent to performing correct binary addition for bit i, updating C[i] and the next carry properly.
Thus after processing bit i, the invariant still holds for the next iteration (i + 1).

✅ The invariant is maintained.

3. Termination

The loop terminates after i = n − 1.

At that point, the invariant implies:
Σ (from k = 0 to n−1) [ C[k] * 2^k ] + carry * 2^n = Σ (from k = 0 to n−1) [ (A[k] + B[k]) * 2^k ]

Finally, we set C[n] = carry, so:
Σ (from k = 0 to n) [ C[k] * 2^k ] = Σ (from k = 0 to n−1) [ (A[k] + B[k]) * 2^k ]

which exactly equals a + b.

✅ Termination gives correct output.

o(n)
 Note: this algorithm does not use conversion so no worries about big numbers
* */


export const addBinary = (num1, num2, n) => {
    const result = new Array(n + 1).fill(0);
    let carry  = 0;

    for (let i = 0; i < n; i++) {
        const sum = num1[i]+num2[i]+carry;
        result[i] = sum %2 ;
        carry = Math.floor(sum/2);
    }
    result[n] = carry;
    return result;

}

/*
loop 1:
Initialization:
Before the first iteration (i = 0), s1 = 0, s2 = 0.
✅ The sum of 0 bits is 0, so invariant holds.

Maintenance:
On iteration i, we add num1[i]*2^i and num2[i]*2^i.
After the addition, s1 and s2 correctly represent the sum of the first i+1 bits.
✅ Invariant maintained.

Termination:
After i = n, s1 and s2 equal the decimal values of the full arrays.
✅ Invariant ensures correct conversion.


loop 2 :
Initialization:
Before the first iteration (j = 0), result[0..−1] is empty, sum = s1 + s2.
✅ Invariant holds.

Maintenance:
At iteration j, we set result[j] = sum % 2 (current LSB) and remove it from sum using Math.floor(sum / 2).
✅ The invariant still holds: sum + Σ result[k]*2^k = s1 + s2.

Termination:
Loop ends when sum = 0.
At this point, result[0..j−1] contains all bits of s1 + s2.
✅ Result array correctly represents the sum in binary.

o(n)
Note: this algorithm as conversion part so should be careful about big numbers

* */

export const addBinaryWithConvert = (num1, num2, n) => {
    let s1 = 0;
    let s2 = 0;
    const result = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        s1 = s1 + num1[i]* Math.pow(2,i);
        s2 = s2 + num2[i]* Math.pow(2,i);

    }
    let sum  = s1 + s2;
    console.log(s1);
    console.log(s2);
    console.log(sum);
    let j = 0;
    while(sum > 0){
        result[j] = sum % 2;
        sum = Math.floor(sum/2);
        j++;
    }

    return result;
}