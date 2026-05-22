# Loops: For and While

## Topic overview

Loops let you repeat work without copying code. For array problems in DSA, the **`for` loop** is the default tool: walk each index from `0` to `length - 1`, inspect `arr[i]`, and decide what to do. The **`while` loop** repeats as long as a condition is true — useful when you do not know in advance how many steps you need (search, pointers) or when you are practicing control flow.

This folder combines two ideas: scan an array for even numbers, and run a simple counter with `while`.

---

## Problem statement

**Part A — Even numbers in an array**

Given an array of numbers, identify every **even** element and report it with its index (log or collect results).

**Part B — While loop demo**

Print a counter from `0` up to (but not including) a limit — here, `5`.

---

## Scenarios and edge cases

### Scanning for evens

| Array | Scenario | What happens |
|-------|----------|----------------|
| `[2, 4, 6]` | All even | Every index logged |
| `[1, 3, 5]` | No evens | Loop runs, nothing printed for evens |
| `[2, 5, 0, 23]` | Mixed | Only even values logged |
| `[]` | Empty | Loop body never runs (`i < 0` immediately false) |
| `[0]` | Zero | `0 % 2 === 0` → **even** |

### While counter

| `j` starts | Condition | Iterations |
|------------|-----------|------------|
| `0` | `j < 5` | `j = 0,1,2,3,4` then stops |

---

## How it works (step by step)

### For loop — array `[2, 5, 7, 0, 23]`

Cache length once: `arrLength = 5`.

| `i` | `arr[i]` | `arr[i] % 2 == 0`? | Action |
|-----|----------|---------------------|--------|
| 0 | 2 | yes | Log even at index 0 |
| 1 | 5 | no | Skip (your code uses `continue` in else) |
| 2 | 7 | no | Skip |
| 3 | 0 | yes | Log even at index 3 |
| 4 | 23 | no | Skip |

**Pattern:** `for (let i = 0; i < arrLength; i++)` — `i` is the index, not the value.

### While loop — `j` from 0 to 4

```
j = 0 → check 0 < 5 → log → j becomes 1
...
j = 4 → check 4 < 5 → log → j becomes 5
j = 5 → check 5 < 5 → false → exit
```

If you forget `j++`, the condition never becomes false → **infinite loop**.

```mermaid
flowchart TD
  start[Start i = 0] --> check{i less than length?}
  check -->|yes| read[Read value at index i]
  read --> even{value mod 2 equals 0?}
  even -->|yes| log[Log value and index]
  even -->|no| skip[Skip]
  log --> inc[Increment i]
  skip --> inc
  inc --> check
  check -->|no| end[Done]
```

---

## Approach

### For — scan and filter by condition

```javascript
const arr = [2, 5, 7, 0, 23, 65, 10, 56];
const arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i] + " is even number and index is " + i);
  }
}
```

Caching `arr.length` in a variable is a small optimization; for tiny arrays it barely matters, but it is a habit some developers use.

**`continue`:** Skips the rest of the current iteration. In your file, `else { continue; }` is redundant — if the `if` body does not run, the loop already moves to the next `i`. Removing the `else` branch is cleaner.

### While — counted loop

```javascript
let j = 0;
while (j < 5) {
  console.log("current index = " + j);
  j++;
}
```

Equivalent `for` form:

```javascript
for (let j = 0; j < 5; j++) {
  console.log("current index = " + j);
}
```

---

## Your implementation

`index.js` Part A loops over `arr`, uses `% 2 == 0`, and logs evens with index — correct scan pattern.

Part B is a separate **`while`** exercise (`j < 5`), not tied to the array. That is intentional practice: same idea (repeat until condition fails), different syntax.

---

## Worked examples

**Input:** `[2, 5, 7, 0, 23, 65, 10, 56]`

**Output (evens only):**

- `2` at index `0`
- `0` at index `3`
- `10` at index `6`
- `56` at index `7`

**While demo:** logs `current index = 0` through `4`.

---

## Complexity

| Part | Time | Space | Intuition |
|------|------|-------|-----------|
| For scan | **O(n)** | **O(1)** | Visit each of `n` elements once |
| While counter | **O(k)** | **O(1)** | `k` iterations (here `k = 5`) |

`n` = array length. Extra space does not grow with input unless you store results in a new array.

---

## Common mistakes

1. **Off-by-one** — `i <= arr.length` reads past the last index. Use `i < arr.length`.
2. **Loop variable name** — Using `i` as the element instead of the index.
3. **Odd/even with floats** — `% 2` on non-integers behaves oddly; these exercises assume integers.
4. **Infinite while** — Missing increment on the counter.
5. **Thinking 0 is odd** — Zero is even.

---

## Practice ideas

1. Print **odd** numbers and their indices instead.
2. Store evens in a new array `evens[]` and return it from a function.
3. Rewrite the `while` block as a `for` loop and compare readability.
4. Sum all even numbers in one pass (accumulator: `sum += arr[i]`).
