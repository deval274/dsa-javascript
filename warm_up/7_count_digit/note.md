# Count Digits in a Number

## Topic overview

Counting digits is a classic warm-up because it teaches a powerful pattern:

- **Repeated division by 10** to remove the last digit
- **A counter** that increments once per loop iteration

You also learn important edge cases:

- `0` still has **1 digit**
- Negative numbers need handling (digit count is the same as their absolute value)

---

## Problem statement

Given an integer `num`, return the **number of digits** in it.

Examples:

- `234` → `3`
- `-234` → `3`
- `0` → `1`

---

## Scenarios and edge cases

| Input | Scenario | Output |
|------:|----------|--------|
| `0` | special case | `1` |
| `5` | single digit | `1` |
| `10` | boundary (power of 10) | `2` |
| `999` | typical positive | `3` |
| `-234` | negative number | `3` |
| `-1` | negative single digit | `1` |

---

## How it works (step by step)

### Key idea: divide by 10 to “drop” the last digit

Using integer division:

- `234 / 10 = 23.4` → `Math.floor(...)` gives `23`
- `23 / 10 = 2.3` → floor gives `2`
- `2 / 10 = 0.2` → floor gives `0` → stop

Each time you divide by 10 and floor, you remove one digit from the right.

### Visual iteration trace (your example `-234`)

Your final approach converts negatives to positives first:

- `num = Math.abs(-234)` → `234`

Then loops:

| iteration | num before | floor(num / 10) | num after | counter |
|----------:|-----------:|-----------------:|----------:|--------:|
| 1 | 234 | 23 | 23 | 1 |
| 2 | 23 | 2 | 2 | 2 |
| 3 | 2 | 0 | 0 | 3 |

Loop stops when `num` becomes `0`. Answer is `3`.

---

## Approach (math loop)

General solution:

```javascript
function countDigit(num) {
  if (num === 0) return 1;
  num = Math.abs(num);

  let counter = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    counter++;
  }
  return counter;
}
```

Why this works:

- Each loop removes **one digit**
- So number of loops = number of digits

---

## Your implementation

In `index.js` you have two versions:

1) **Older commented attempt**: handled negatives using `Math.ceil(num / 10)` while `num < 0`  
2) **Final version (active)**: much simpler:

- handles `num === 0` → return `1`
- converts negative to positive using `Math.abs`
- loops with `Math.floor(num / 10)`

You also log:

- `-234 / 10`
- `Math.ceil(-234 / 10)` and `Math.ceil(-23 / 10)`

That’s useful for understanding why negatives behave differently with `floor` vs `ceil`:

- `Math.floor(-23.4) = -24` (more negative)
- `Math.ceil(-23.4) = -23` (towards zero)

Instead of maintaining two different loops (positive/negative), taking `Math.abs` makes the logic identical for both.

---

## Worked examples

| Input | Steps (concept) | Output |
|------:|------------------|-------:|
| `0` | special case | 1 |
| `7` | 7 → 0 | 1 |
| `10` | 10 → 1 → 0 | 2 |
| `236` | 236 → 23 → 2 → 0 | 3 |
| `-9999` | abs → 9999 → 999 → 99 → 9 → 0 | 4 |

---

## Complexity

Let `d` be the number of digits in `num`.

- **Time:** **O(d)** — one loop per digit
- **Space:** **O(1)** — only a few variables

Since `d = floor(log10(|num|)) + 1` for non-zero numbers, you may also see this described as O(log n) with respect to the numeric value.

---

## Common mistakes

1. **Forgetting `0`**: the loop `while (num > 0)` runs 0 times for `0`, so you must return 1.
2. **Not handling negatives**: digit count of `-234` should still be 3.
3. **Using `Math.round`**: rounding can move the value up/down incorrectly; you want to drop digits, not round them.
4. **Floating inputs**: this logic assumes integers. For decimals, you need a different definition of “digit count”.

---

## Practice ideas

1. Count digits using a **string method**: `String(Math.abs(num)).length` and compare with the loop (know both).
2. Write `sumOfDigits(num)` using the same loop but with `% 10` to extract last digit.
3. Write `reverseNumber(num)` using digit extraction and building a new number.

