# Functions and If / Else

## Topic overview

Before arrays and algorithms, you need two building blocks: **functions** (reusable blocks of logic) and **conditional branching** (decisions based on input). Almost every DSA solution combines loops with `if` checks. This exercise practices writing small functions that take a value, validate it, and return a clear result.

---

## Problem 1: Voting eligibility

**Goal:** Given a person's age, decide whether they are eligible to vote.

**Expected behavior:**

- Valid age `>= 18` → eligible message
- Valid age `< 18` → not eligible message
- Invalid age (e.g. negative) → error message, not a yes/no vote answer

---

## Problem 2: Even or odd

**Goal:** Given an integer, report whether it is even or odd.

**Rule:** A number is **even** when it divides evenly by 2 (remainder 0). Use the modulo operator: `number % 2 === 0`.

---

## Scenarios and edge cases

### Voting

| Input (age) | Scenario | Expected idea |
|-------------|----------|----------------|
| `18` | Boundary — exactly old enough | Eligible |
| `25` | Clearly eligible | Eligible |
| `12` | Under 18 | Not eligible |
| `0` | Valid but young | Not eligible |
| `-3` | Invalid input | Reject before voting logic |

### Even / odd

| Input | Scenario | Result |
|-------|----------|--------|
| `2`, `4` | Positive even | Even |
| `3`, `7` | Positive odd | Odd |
| `0` | Zero is divisible by 2 | Even |
| `-4` | Negative even | Even |
| `-3` | Negative odd | Odd |

---

## How it works (step by step)

### Voting example: `age = 12`

1. Function receives `12`.
2. First check: is `age < 0`? No → skip invalid branch.
3. Next: is `age >= 18`? No → go to else.
4. Return not eligible.

### Voting example: `age = -3`

1. Function receives `-3`.
2. First check: is `age < 0`? **Yes** → return invalid immediately (guard clause).
3. Never evaluate voting rules on bad data.

### Even / odd example: `number = 7`

1. Compute `7 % 2` → remainder `1` (not zero).
2. Condition `number % 2 === 0` is false → odd branch.

---

## Approach

### Voting — guard clause then branch

```javascript
function isEligibleForVoting(age) {
  if (age < 0) {
    return "Invalid input";
  }
  if (age >= 18) {
    return "Eligible for vote";
  }
  return "Ineligible for vote";
}
```

**Why check invalid first?** Invalid input is a different kind of problem than “too young to vote.” Handling it early keeps the rest of the logic simple.

**Optional shorthand (ternary):** For two outcomes only (no invalid case), you could write:

```javascript
return age >= 18 ? "Eligible" : "Ineligible";
```

Your `index.js` has this ternary commented out — useful when there is no third “invalid” path.

### Even / odd

```javascript
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "number is even";
  }
  return "number is odd";
}
```

Prefer **`===`** over **`==`** in new code so you compare value and type strictly.

---

## Your implementation

In `index.js` you wrote:

- `isEligibleForVoting(age)` with `if / else if / else` and an early return for negative age — this matches the guard-clause pattern above.
- `isEvenOrOdd(number)` with a single `% 2` check — the standard approach.

Console logs at the bottom test boundary and invalid cases — good habit for warm-up exercises.

---

## Worked examples

| Function | Input | Output (concept) |
|----------|-------|------------------|
| Voting | `18` | Eligible |
| Voting | `12` | Ineligible |
| Voting | `-3` | Invalid input |
| Even/odd | `2` | Even |
| Even/odd | `3` | Odd |

---

## Complexity

| | Time | Space | Why |
|---|------|-------|-----|
| Both problems | **O(1)** | **O(1)** | Fixed number of comparisons; no loops or extra data structures |

Input size does not matter — you only look at one number.

---

## Common mistakes

1. **Wrong boundary** — Using `age > 18` misses exactly 18. Use `>= 18`.
2. **No validation** — Treating `-5` as “ineligible to vote” instead of invalid.
3. **`==` vs `===`** — `8 == "8"` is true in JavaScript; `8 === "8"` is false. Prefer `===`.
4. **Confusing even test** — Checking `number / 2` instead of `number % 2 === 0`.

---

## Practice ideas

1. Add a maximum reasonable age (e.g. `age > 120` → invalid).
2. Rewrite even/odd using only a ternary and return `"even"` / `"odd"`.
3. Write `signOf(n)` returning `"positive"`, `"negative"`, or `"zero"` using `if / else if / else`.
