# Search Element in an Array (Linear Search)

## Topic overview

**Searching** means finding whether a value exists and **where** it lives. When the array is unsorted, you check elements one by one from start to end — this is **linear search**. It is the foundation before binary search (which needs a sorted array). LeetCode-style problems almost always ask for an **index** or **-1** if not found.

> Folder name uses `serach` — the correct spelling is **search**. The idea is the same.

---

## Problem statement

Given an array and a target value `number`:

- If the value exists, return its **index** (usually the first occurrence).
- If it does not exist, return **-1** (common convention meaning “not found”).

---

## Scenarios and edge cases

| Scenario | Array | Target | Result |
|----------|-------|--------|--------|
| Found at start | `[3, 6, 9, 2, 10, 1]` | `3` | index `0` |
| Found in middle | same | `9` | index `2` |
| Found at end | same | `1` | index `5` |
| Not found | same | `99` | `-1` |
| Duplicates | `[5, 5, 5]` | `5` | index `0` (first match) |
| Empty | `[]` | any | `-1` |
| Single element | `[7]` | `7` | `0` |
| Single element | `[7]` | `1` | `-1` |

---

## How it works (step by step)

**Array:** `[3, 6, 9, 2, 10, 1]` — **target:** `9`

| `i` | `arr[i]` | `arr[i] === 9`? | Action |
|-----|----------|-----------------|--------|
| 0 | 3 | no | continue |
| 1 | 6 | no | continue |
| 2 | 9 | **yes** | return index `2` immediately |

**Target:** `99` — loop finishes with no match → return `-1`.

**Why return early?** Once you find the answer, there is no need to scan the rest — saves time on average when the target is near the front.

```mermaid
flowchart TD
  start[i = 0] --> check{i less than length?}
  check -->|yes| eq{arr[i] equals target?}
  eq -->|yes| found[Return index i]
  eq -->|no| inc[i++]
  inc --> check
  check -->|no| nf[Return -1]
```

---

## Approach

### Standard contract (recommended for DSA)

```javascript
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

Use **`===`** so type and value match (e.g. `9` vs `"9"`).

### Built-in alternative (know it exists)

```javascript
arr.indexOf(target); // returns -1 if missing
```

Writing the loop yourself teaches the algorithm; `indexOf` is what you might use in app code.

---

## Your implementation

`findElement(number)` in `index.js` loops correctly and compares with `===`. On success you return a **string** describing the value and index — helpful for learning. For coding interviews and automated tests, returning the **index number** (or `-1`) is the usual contract.

Example alignment:

- Your style: `"number was 9 and the index is 2"`
- DSA style: `2`

Both use the same underlying linear search.

---

## Worked examples

| Array | Target | Return |
|-------|--------|--------|
| `[3, 6, 9, 2, 10, 1]` | `9` | `2` |
| `[3, 6, 9, 2, 10, 1]` | `10` | `4` |
| `[3, 6, 9, 2, 10, 1]` | `0` | `-1` |
| `[]` | `3` | `-1` |

---

## Complexity

| | Time | Space |
|---|------|-------|
| Linear search | **O(n)** worst & average (unsorted, may need full scan) | **O(1)** |

- **Best case:** O(1) when the target is at index `0`.
- **Worst case:** O(n) when missing or at last index.

**Later:** On a **sorted** array, **binary search** runs in O(log n) time — different prerequisite (sorted order).

---

## Common mistakes

1. **Returning `0` for “not found”** — `0` is a valid index. Use `-1` for missing.
2. **Not returning after find** — Continuing the loop wastes work (still correct if you only keep first index).
3. **Loose equality `==`** — Can match wrong types.
4. **Searching without loop on unsorted data** — You must check elements in order unless you use a hash map (different topic).

---

## Practice ideas

1. Add parameter `arr` and return index or `-1` only.
2. **Find last occurrence** of a duplicate value (scan full array, update index whenever equal).
3. Count how many times `target` appears (linear scan, accumulator).
4. After sorting a copy of the array, compare linear search vs `indexOf` vs binary search timing on paper (Big O).
