# Max Consecutive Ones

## Topic overview

This is a “single scan” array problem: find the longest streak of `1`s in a binary array (array containing only 0 and 1).

The key pattern is **streak counting**:

- Maintain a `current` count that increases when you see `1`
- Reset `current` to `0` when you see `0`
- Keep a `max` seen so far

LeetCode **485. Max Consecutive Ones**.

---

## Problem statement

Given a binary array `nums`, return the maximum number of consecutive `1`s.

Examples:

- `[1,1,0,1,1,1]` → `3`
- `[1,0,1,1,0,1]` → `2`
- `[0,0,0]` → `0`

---

## Scenarios and edge cases

| nums | Scenario | Answer |
|------|----------|--------|
| `[1,1,0,1,1,1]` | streak ends, new streak starts | 3 |
| `[1,1,1]` | all ones | 3 |
| `[0,0,0]` | no ones | 0 |
| `[1,0,1,1,0,1]` | multiple streaks | 2 |
| `[]` | empty array | 0 |
| `[1]` | single element | 1 |
| `[0]` | single element | 0 |

---

## How it works (step by step)

### Streak counter idea

For each number:

- if it’s `1`: `current++`
- if it’s `0`: streak breaks → update max, then `current = 0`

**Trace:** `nums = [1,1,0,1,1,1]`

| i | nums[i] | current | max |
|---|--------:|--------:|----:|
| 0 | 1 | 1 | 1 |
| 1 | 1 | 2 | 2 |
| 2 | 0 | 0 | 2 |
| 3 | 1 | 1 | 2 |
| 4 | 1 | 2 | 2 |
| 5 | 1 | 3 | 3 |

Answer: `3`.

```mermaid
flowchart TD
  start[current = 0, best = 0] --> loop[Scan each value]
  loop --> one{value is 1?}
  one -->|yes| inc[current++]
  inc --> upd[best = max(best, current)]
  upd --> loop
  one -->|no| reset[current = 0]
  reset --> loop
  loop --> done[Return best]
```

---

## Approach(es)

Your file shows two very similar correct patterns.

### Approach 1: update max immediately when you see a `1`

```javascript
var findMaxConsecutiveOnes = function(nums) {
  let result = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr += 1;
      if (curr > result) {
        result = curr;
      }
    } else {
      curr = 0;
    }
  }
  return result;
};
```

### Approach 2: update max only when streak breaks, plus a final check

```javascript
var findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0;
  let currCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    }
  }
  return Math.max(maxCount, currCount);
};
```

**Why the final `Math.max(maxCount, currCount)`?**

If the array ends with `1`s, you never hit the `else` block to update `maxCount`. The final max handles that.

---

## Your implementation

`index.js` defines `findMaxConsecutiveOnes` twice. In JavaScript, the **second definition overwrites the first**, so only the **2nd approach** is active if you call the function.

Both approaches are correct; approach 2 just needs the final max check.

---

## Worked examples

| nums | Output |
|------|--------|
| `[1,1,0,1,1,1]` | 3 |
| `[1,0,1,1,0,1]` | 2 |
| `[0,0,0]` | 0 |
| `[1,1,1]` | 3 |
| `[]` | 0 |

---

## Complexity

Let `n = nums.length`.

- **Time:** **O(n)** — one pass
- **Space:** **O(1)** — a few counters

---

## Common mistakes

1. **Forgetting to reset** `current` on a `0`.
2. **Missing final update** when the array ends with `1`s (approach 2 without the last `Math.max`).
3. **Counting total ones** instead of consecutive ones.
4. **Using nested loops** (O(n²)) — unnecessary.

---

## Practice ideas

1. LeetCode **487** — Max Consecutive Ones II (can flip at most one 0).
2. Return the **start and end indices** of the longest streak.
3. Count consecutive zeros instead (same pattern).

