# Count Negative Numbers in an Array

## Topic overview

Many array problems are not about finding one answer — they are about **counting** how many elements satisfy a rule. The pattern is always the same: initialize a counter, loop through the array, increment when a condition is true, return the count. You will reuse this for counting evens, primes in a range, vowels in a string, and more.

---

## Problem statement

Given an array of numbers, return how many elements are **strictly negative** (less than zero).

**Note:** `0` is not negative. `-0` in JavaScript is still `0` for comparisons.

---

## Scenarios and edge cases

| Array | Scenario | Count |
|-------|----------|-------|
| `[1, 5, 9, -2, -7, -4, 4, 0, -8]` | Mixed positives, negatives, zero | `4` |
| `[-1, -2, -3]` | All negative | `3` |
| `[1, 2, 3]` | No negatives | `0` |
| `[0, 0, 0]` | Only zeros | `0` |
| `[]` | Empty | `0` |
| `[-5]` | Single negative | `1` |

---

## How it works (step by step)

**Input:** `[1, 5, 9, -2, -7, -4, 4, 0, -8]`

1. `countNegative = 0`
2. Walk each index:

| `i` | `arr[i]` | `< 0`? | `countNegative` after |
|-----|----------|--------|------------------------|
| 0 | 1 | no | 0 |
| 1 | 5 | no | 0 |
| 2 | 9 | no | 0 |
| 3 | -2 | yes | 1 |
| 4 | -7 | yes | 2 |
| 5 | -4 | yes | 3 |
| 6 | 4 | no | 3 |
| 7 | 0 | no | 3 |
| 8 | -8 | yes | 4 |

3. Return `4`.

```mermaid
flowchart TD
  start[count = 0, i = 0] --> check{i less than length?}
  check -->|yes| val[Read arr at i]
  val --> neg{arr[i] less than 0?}
  neg -->|yes| inc[count++]
  neg -->|no| next[i++]
  inc --> next
  next --> check
  check -->|no| return[Return count]
```

---

## Approach

### General solution (parameterized)

Pass the array in — easier to test and reuse:

```javascript
function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count += 1;
    }
  }
  return count;
}
```

**Accumulator pattern:** `count` starts at `0` and only grows when the condition matches.

**Alternative:** `count++` instead of `count += 1`.

**Return type:** Interview-style functions usually return a **number**. A formatted string (`"Counts of negative number is = 4"`) is fine for learning logs but harder to test automatically.

---

## Your implementation

In `index.js`, `countNegativeNumber()` uses the correct loop and condition (`arr[i] < 0`). The array `arr` lives **outside** the function, so the function always counts that one global array. That works for practice; passing `arr` as an argument is the more flexible design.

You return a descriptive string — good for `console.log`, but consider returning `countNegative` as a number and formatting only when printing.

---

## Worked examples

| Input | Output (count) |
|-------|----------------|
| `[1, 5, 9, -2, -7, -4, 4, 0, -8]` | `4` |
| `[10, 20]` | `0` |
| `[-1, -1, 5]` | `2` |
| `[]` | `0` |

---

## Complexity

| | Time | Space |
|---|------|-------|
| Single pass | **O(n)** | **O(1)** |

- **Time:** Each element checked once; `n` = length.
- **Space:** Only a counter variable — no extra array proportional to `n`.

---

## Common mistakes

1. **Using `<= 0`** — That counts zero as negative. Use `< 0` only.
2. **Not initializing count** — Uninitialized variables break logic.
3. **Returning inside the loop on first negative** — You would stop early; count needs the full scan unless you optimize on purpose.
4. **Hard-coded global array** — Function cannot count a different array without copy-paste.

---

## Practice ideas

1. Refactor to `countNegativeNumbers(arr)` and test with three different arrays.
2. Write `countPositive(arr)` and `countZeros(arr)` using the same pattern.
3. Return both count and **indices** of negatives in an array (second pass or push to `indices[]` — space becomes O(k) for k negatives).
