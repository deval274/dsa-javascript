# Star Patterns (and Number Patterns) using Nested Loops

## Topic overview

Pattern printing is the best way to become comfortable with **nested loops** and building strings row-by-row.

The general idea you use in all patterns in `index.js`:

- Outer loop (`i`) = **row number**
- Inner loop(s) (`j`, `k`) = build the **content of that row**
- Use a `row = ""` string, append characters/numbers, then `console.log(row)`

Once you learn to control how many times each inner loop runs, you can create squares, triangles, and aligned shapes.

---

## Problem statement

Given a size `n`, print different patterns (stars `*` and digits) using loops.

Your file contains **10 patterns** (all currently commented), each showing a different loop relationship:

- Constant inner length (square)
- Increasing length (growing triangles)
- Decreasing length (reverse triangles)
- Right alignment using spaces
- Alternating digits using a toggle

---

## Scenarios and edge cases

| `n` | What happens | Notes |
|-----|--------------|------|
| `n = 1` | Single row patterns | Simplest base case |
| `n = 0` | Prints nothing | Outer loop doesn’t run |
| `n < 0` | Prints nothing (with current loops) | Usually you treat it as invalid input |

For learning, assume `n` is a positive integer.

---

## How it works (step by step)

### The “row builder” pattern (used everywhere)

```javascript
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < something; j++) {
    row = row + "*";
  }
  console.log(row);
}
```

**Visual loop iteration (tiny example):** Pattern 2 with `n = 4`

- `i = 0` → inner runs 1 time → `*`
- `i = 1` → inner runs 2 times → `**`
- `i = 2` → inner runs 3 times → `***`
- `i = 3` → inner runs 4 times → `****`

**Key skill:** decide what `something` should be (depends on the pattern).

---

## Approach(es)

### 1) Decide row length formula

Most of your patterns are one of these inner loop lengths:

- **Square:** `n`
- **Increasing triangle:** `i + 1`
- **Decreasing triangle:** `n - i`

### 2) Add alignment if needed

Right-aligned triangles need **spaces** before stars:

- spaces count = `n - (i + 1)`
- stars count = `i + 1`

### 3) Use a toggle for alternating digits

For binary patterns (`1010...`), keep a variable that flips between 0 and 1.

---

## Your implementation (what’s in `index.js`)

All patterns follow this structure:

- `let row = ""` inside the outer loop
- inner loop appends `"* "`, `"*"`, or digits
- `console.log(row)` prints each row

Below is a note for each numbered pattern in your file.

---

## Pattern 1: Solid square of stars

Output for `n = 4`:

```
* * * * 
* * * * 
* * * * 
* * * * 
```

Loop idea:

- rows: `i = 0..n-1`
- cols: `j = 0..n-1`
- append `"* "` exactly `n` times each row

---

## Pattern 2: Increasing star triangle (left-aligned)

Output for `n = 4`:

```
* 
* * 
* * * 
* * * * 
```

Loop idea:

- row `i` has `i + 1` stars
- inner condition: `j <= i`

---

## Pattern 3: Increasing number triangle (1..row)

Output for `n = 5`:

```
1
12
123
1234
12345
```

Loop idea:

- row `i` prints numbers from `1` to `i + 1`
- append `(j + 1)` each time

---

## Pattern 4: Repeated row number triangle

Output for `n = 5`:

```
1
22
333
4444
55555
```

Loop idea:

- row `i` repeats the same number `(i + 1)` exactly `i + 1` times

---

## Pattern 5: Decreasing number triangle (1..k)

Output for `n = 5`:

```
12345
1234
123
12
1
```

You show two equivalent methods:

- Outer loop counts down `i = n..1`, inner prints `1..i`
- Outer loop counts up `i = 0..n-1`, inner prints `1..(n-i)`

**Visual inner counts (second method):**

| `i` | inner runs (`n - i`) |
|-----|-----------------------|
| 0 | 5 |
| 1 | 4 |
| 2 | 3 |
| 3 | 2 |
| 4 | 1 |

---

## Pattern 6: Decreasing repeated number triangle

Output for `n = 5`:

```
55555
4444
333
22
1
```

Loop idea:

- outer loop `i` goes `5,4,3,2,1`
- inner repeats the current `i` value, `i` times

---

## Pattern 7: Decreasing star triangle

Output for `n = 5`:

```
* * * * * 
* * * * 
* * * 
* * 
* 
```

Loop idea:

- row `i` prints `n - i` stars

---

## Pattern 8: Right-aligned increasing star triangle

Output for `n = 5`:

```
    *
   **
  ***
 ****
*****
```

Loop idea (two inner loops):

- spaces loop runs `n - (i + 1)` times
- stars loop runs `i + 1` times

**Iteration visual for `n = 5`:**

| row `i` | spaces | stars |
|---------|--------|-------|
| 0 | 4 | 1 |
| 1 | 3 | 2 |
| 2 | 2 | 3 |
| 3 | 1 | 4 |
| 4 | 0 | 5 |

---

## Pattern 9: Alternating 1/0 per row (starts with 1 each row)

Output concept:

```
1
10
101
1010
10101
```

You show two ways:

### Way A: use `j % 2`

- if `j` even → append `"1"`
- else → append `"0"`

This resets naturally each row because `j` starts at 0 every row.

### Way B: use a `toggle` variable inside each row

Start `toggle = 1`, append it, then flip it each time:

```javascript
if (toggle === 1) toggle = 0;
else toggle = 1;
```

---

## Pattern 10: Alternating 1/0 continuously across rows (global toggle)

Output concept:

```
1
01
010
1010
10101
```

Difference from Pattern 9:

- `toggle` is defined **outside** the outer loop
- so it continues across rows instead of restarting at `1`

This is why row 2 starts with `0`.

---

## Worked examples

### Example: Pattern 8 with `n = 5`

- `i = 0` → `"    " + "*"` → `    *`
- `i = 1` → `"   " + "**"` → `   **`
- `i = 2` → `"  " + "***"` → `  ***`

### Example: Pattern 10 toggle flow (first 6 appends)

toggle sequence: `1,0,1,0,1,0,...`

So the printing continues across line breaks.

---

## Complexity

Most patterns here have nested loops where the total printed characters are proportional to `n²`.

- **Time:** typically **O(n²)** (square and triangles are both quadratic growth)
- **Space:** **O(1)** extra space (you use a `row` string per line; if we count output size, printing itself dominates)

---

## Common mistakes

1. **Off-by-one** errors: `j < i` vs `j <= i` changes row length by 1.
2. **Forgetting to reset `row`** inside the outer loop: then all rows join together.
3. **Space alignment wrong**: spaces must be `n - (i + 1)` for right-aligned triangle.
4. **Toggle placement**: defining toggle inside the outer loop resets every row; outside makes it continuous.
5. **Mixing `"* "` vs `"*"`**: affects spacing and alignment of output.

---

## Practice ideas

1. Build a centered pyramid (spaces + odd number of stars: `1, 3, 5, ...`).
2. Print a hollow square (stars on borders only).
3. Print a diamond (pyramid + inverted pyramid).
4. Combine numbers and stars: `1*`, `12**`, `123***` for `n = 3`.

