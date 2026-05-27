# Loop Within a Loop (Nested Loops)

## Topic overview

A **nested loop** means you run one loop **inside** another. The outer loop controls how many “groups” of work happen, and the inner loop controls how much work happens **per** outer iteration.

This pattern is common in:

- 2D grids (rows × columns)
- Pair comparisons (check every pair)
- Pattern printing (triangles, pyramids)

---

## Problem statement (what this file teaches)

Understand how nested loops behave by tracing different `j` loop conditions:

- fixed inner range (`j < 3`)
- triangle shapes (`j < i`, `j <= i`)
- reverse inner loops (`j = i; j > 0; j--`)
- decreasing outer loops (`i--`) with inner loop depending on `i`

---

## Core idea: how many times does the inner loop run?

If the outer loop runs `n` times and the inner loop runs `m` times for each outer iteration, total operations are roughly:

\[
\text{total} = n \times m
\]

But in many examples here, `m` is not constant — it depends on `i` (triangle patterns). Then the total becomes a sum like:

\[
0 + 1 + 2 + \dots + (n-1) = \frac{(n-1)n}{2}
\]

---

## How it works (step by step, visually)

Below, each row is one `console.log` call (one “inner iteration”), so you can literally see the order of execution.

### Example 0: `j < 3` (3 × 3 grid)

Code (from your comments):

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i = " + i + " j = " + j);
  }
}
```

**Iteration order visual (9 logs):**

| step | i | j | printed |
|------|---|---|---------|
| 1 | 0 | 0 | i=0 j=0 |
| 2 | 0 | 1 | i=0 j=1 |
| 3 | 0 | 2 | i=0 j=2 |
| 4 | 1 | 0 | i=1 j=0 |
| 5 | 1 | 1 | i=1 j=1 |
| 6 | 1 | 2 | i=1 j=2 |
| 7 | 2 | 0 | i=2 j=0 |
| 8 | 2 | 1 | i=2 j=1 |
| 9 | 2 | 2 | i=2 j=2 |

**What to notice:** For each fixed `i`, `j` runs from 0 to 2 completely, then `i` increments.

---

### Example 1: `j < i` (triangle, excludes diagonal)

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i = " + i + " j = " + j);
  }
}
```

**How many inner runs per `i`:**

- `i = 0` → `j < 0` → 0 runs
- `i = 1` → `j = 0` → 1 run
- `i = 2` → `j = 0, 1` → 2 runs

**Iteration order visual:**

| step | i | j |
|------|---|---|
| 1 | 1 | 0 |
| 2 | 2 | 0 |
| 3 | 2 | 1 |

This forms a triangle shape because the inner loop length grows with `i`.

---

### Example 2: `j <= i` (triangle, includes diagonal)

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("i = " + i + " j = " + j);
  }
}
```

**How many inner runs per `i`:**

- `i = 0` → `j = 0` → 1 run
- `i = 1` → `j = 0, 1` → 2 runs
- `i = 2` → `j = 0, 1, 2` → 3 runs

**Iteration order visual:**

| step | i | j |
|------|---|---|
| 1 | 0 | 0 |
| 2 | 1 | 0 |
| 3 | 1 | 1 |
| 4 | 2 | 0 |
| 5 | 2 | 1 |
| 6 | 2 | 2 |

---

### Example 3: reverse inner loop (`j = i; j > 0; j--`)

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log("i = " + i + " j = " + j);
  }
}
```

**How many inner runs per `i`:**

- `i = 0` → start `j = 0`, condition `j > 0` false → 0 runs
- `i = 1` → `j = 1` → 1 run (`j` prints 1)
- `i = 2` → `j = 2, 1` → 2 runs

**Iteration order visual:**

| step | i | j |
|------|---|---|
| 1 | 1 | 1 |
| 2 | 2 | 2 |
| 3 | 2 | 1 |

Notice the `j` values go **down** each time.

---

### Example 4: decreasing outer loop (`i = 5` down to 1)

```javascript
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
```

**How many inner runs per `i`:** `i` times each outer loop.

| i | j values |
|---|----------|
| 5 | 0,1,2,3,4 |
| 4 | 0,1,2,3 |
| 3 | 0,1,2 |
| 2 | 0,1 |
| 1 | 0 |

**Total logs:** \(5 + 4 + 3 + 2 + 1 = 15\).

---

## Approach(es)

### General nested loop template

```javascript
for (let i = 0; i < outerLimit; i++) {
  for (let j = 0; j < innerLimit(i); j++) {
    // work using i and j
  }
}
```

If `innerLimit(i)` depends on `i`, you often get triangle totals (O(n²) behavior, but “half” of it).

---

## Your implementation (what’s in `index.js`)

Your file currently contains:

- Several **nested loop examples** (commented)
- An active `secondHighest(s)` function at the bottom that scans a string and pushes digits into an array

That last function is a **string scan**, not a nested loop. It still uses the same loop thinking (“repeat this for each character”), but it’s a separate topic from nested loops.

---

## Worked examples (quick)

- Example 0 prints 9 lines for a 3×3 grid.
- Example 4 prints 15 lines because it sums 5 + 4 + 3 + 2 + 1.

---

## Complexity

Let `n` be the outer loop size.

- **Example 0 (3×3 grid idea):** O(n²) time, O(1) space
- **Triangle examples (j depends on i):** still O(n²) time (because \(1+2+\dots+n\) is proportional to \(n^2\)), O(1) space

Space is O(1) because loops use only a few counters unless you store results.

---

## Common mistakes

1. **Wrong loop condition** (`<=` instead of `<`) causing one extra iteration.
2. **Infinite loop** when decrement/increment is wrong (especially with `j--`).
3. **Assuming inner loop always runs** — for some `i` values, it can run 0 times (`j < i` when `i = 0`).
4. **Confusing order** — inner loop completes fully before outer loop moves to next `i`.

---

## Practice ideas

1. Change Example 0 to print a 4×4 grid and write the first 8 steps manually.
2. Modify Example 4 to print a pattern of `*` characters (classic nested loop pattern question).
3. Try a pair loop: for each index, compare with all later indices (`j = i + 1`) and count pairs.

