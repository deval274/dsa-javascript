# Find Second Largest Element in an Array

## Topic overview

After finding the **maximum**, the natural next step is the **second largest** — the biggest value that is still strictly less than the max. This builds on one-pass tracking from [find largest](../loop_2/find_largestElement_from_array/note.md) and introduces a harder edge case: **duplicates** (when every element equals the max, there is no second distinct largest).

Your `index.js` shows the progression well: two-pass (clear but slower), two-pass with guards, then **one-pass optimized** tracking both `firstLargest` and `secondLargest`.

---

## Problem statement

Given an array of numbers, return the **second largest** value — the maximum among all elements that are **strictly less than** the largest.

**Contract extensions (your code):**

- If `arr.length < 2` → return a message (not enough elements for a “second”)
- If all elements are the same → no valid second largest → return a message

---

## Scenarios and edge cases

| Array | Scenario | Expected second largest |
|-------|----------|-------------------------|
| `[1, 3, 7, 5, 9, 2]` | Normal mixed | `7` (max is `9`) |
| `[3, 4]` | Two elements | `3` |
| `[3]` | Single element | Error: need at least 2 |
| `[]` | Empty | Error: need at least 2 |
| `[9, 9, 9, 9]` | All equal | No second distinct value |
| `[-2, -6, -1, -9]` | All negative | `-2` (max is `-1`) |
| `[-9, -9, -9, -9]` | All equal negatives | No second distinct value |
| `[10, 10, 5]` | Max duplicated | `5` |
| `[5, 10, 10]` | Max at end | `5` |

**Rule:** Second largest means **strictly less than** the max. Two copies of the max do not count as first and second.

---

## How it works (step by step)

### Two-pass approach (commented in your file)

**Pass 1 — find max**

Array `[1, 3, 7, 5, 9, 2]` → `largest = 9`.

**Pass 2 — best value still below max**

Only consider `arr[i]` where `arr[i] < largest`:

| `arr[i]` | `< 9`? | Candidate for second |
|----------|--------|----------------------|
| 1, 3, 7, 5, 2 | yes | track max of these → `7` |

Return `7`.

**Time:** two full loops → **O(2n)**, which simplifies to **O(n)** (constants drop in Big O).

---

### One-pass optimized (your active solution)

Keep two trackers:

- `firstLargest` — current max
- `secondLargest` — best value strictly below `firstLargest`

**Trace:** `[1, 3, 7, 5, 9, 2]`

| `i` | `arr[i]` | Branch | `firstLargest` | `secondLargest` |
|-----|----------|--------|----------------|-----------------|
| 0 | 1 | new max | 1 | -∞ |
| 1 | 3 | new max | 3 | 1 |
| 2 | 7 | new max | 7 | 3 |
| 3 | 5 | between | 7 | 5 |
| 4 | 9 | new max | 9 | 7 |
| 5 | 2 | skip | 9 | 7 |

Return `7`.

**When you see a new max:** the old `firstLargest` might become the new `secondLargest`:

```javascript
if (firstLargest < arr[i]) {
  secondLargest = firstLargest;
  firstLargest = arr[i];
}
```

**When value is not max but beats current second:**

```javascript
else if (secondLargest < arr[i] && arr[i] < firstLargest) {
  secondLargest = arr[i];
}
```

```mermaid
flowchart TD
  start[first = -Inf, second = -Inf] --> len{length less than 2?}
  len -->|yes| err[Return min length message]
  len -->|no| loop[For each arr at i]
  loop --> gt{arr[i] greater than first?}
  gt -->|yes| shift[second = first, first = arr[i]]
  gt -->|no| mid{arr[i] greater than second and less than first?}
  mid -->|yes| upd[second = arr[i]]
  mid -->|no| next[Next i]
  shift --> next
  upd --> next
  next --> loop
  loop --> done{second still -Inf?}
  done -->|yes| same[All same numbers message]
  done -->|no| ret[Return second]
```

---

## Approaches

### 1. Two-pass (base version)

```javascript
function secondLargestTwoPass(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) largest = arr[i];
  }
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (second < arr[i] && arr[i] < largest) {
      second = arr[i];
    }
  }
  return second;
}
```

**Pros:** Easy to reason about — “find max, then find best under max.”  
**Cons:** Two loops; still need extra checks for duplicates and short arrays.

---

### 2. Two-pass with edge cases (your commented variant)

Adds `arr.length < 2` guard. Initializes `secondLargest = arr[0]` in pass 2 instead of `-Infinity` — works for many cases when length ≥ 2, but the one-pass `-Infinity` pattern plus a final “still -Infinity?” check is more uniform for “all equal” arrays.

---

### 3. One-pass optimized (recommended)

```javascript
function secondLargest(arr) {
  if (arr.length < 2) {
    return "length should be min 2";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (firstLargest < arr[i]) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (secondLargest < arr[i] && arr[i] < firstLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    return "array contains same numbers";
  }
  return secondLargest;
}
```

**Pros:** Single scan, O(n) time, O(1) space — interview-friendly.  
**Cons:** Logic is denser; worth tracing on paper until it feels natural.

---

## Your implementation

`index.js` keeps earlier versions commented for comparison — a good study habit.

**Active code** matches approach 3:

- `arr`, `arr3` — typical and two-element cases
- `arr1`, `arr6` — all equal (positive or negative) → `"array contains same numbers"`
- `arr2`, `arr4` — too short → `"length should be min 2"`
- `arr5` — negatives; `-Infinity` init avoids the “start at 0” bug from largest-element exercises

Your inline comment `// time complexity = O(n)` on the optimized version is correct. The two-pass comment `O(2n) => O(n)` is also correct — both are linear.

---

## Worked examples

| Input | Max | Second largest | Your function returns |
|-------|-----|----------------|------------------------|
| `[1, 3, 7, 5, 9, 2]` | 9 | 7 | `7` |
| `[3, 4]` | 4 | 3 | `3` |
| `[9, 9, 9, 9]` | 9 | (none) | `"array contains same numbers"` |
| `[-2, -6, -1, -9]` | -1 | -2 | `-2` |
| `[-9, -9, -9, -9]` | -9 | (none) | `"array contains same numbers"` |
| `[3]` | — | — | `"length should be min 2"` |
| `[]` | — | — | `"length should be min 2"` |

---

## Complexity

| Approach | Time | Space |
|----------|------|-------|
| Two-pass | **O(n)** | **O(1)** |
| One-pass optimized | **O(n)** | **O(1)** |

Two passes are still linear; one pass is a constant-factor improvement (half the iterations) and cleaner to present.

**Sort alternative (awareness only):** Sort descending and scan for first value `< max` — **O(n log n)** time, usually worse unless you already need sorted order.

---

## Common mistakes

1. **Treating duplicate max as second** — `[9, 9, 5]` → second is `5`, not `9`.
2. **Second pass without `< largest`** — Including the max again in the second scan.
3. **Not handling all-equal array** — Returning `-Infinity` or `arr[0]` without checking.
4. **Initializing second to `0`** — Breaks on all-negative arrays (same lesson as find-largest).
5. **Single-element or empty array** — Returning a number when “second” does not exist.
6. **Forgetting to shift on new max** — When `arr[i]` beats `firstLargest`, old `first` must move to `second`.

---

## Practice ideas

1. Return **index** of second largest (handle ties: first index of max vs second distinct value).
2. Find **second smallest** with one pass (`firstSmallest`, `secondSmallest`).
3. Find **k-th largest** (intro to sorting / quickselect — advanced).
4. Uncomment the two-pass version and log both passes side-by-side with the optimized function on the same arrays.
