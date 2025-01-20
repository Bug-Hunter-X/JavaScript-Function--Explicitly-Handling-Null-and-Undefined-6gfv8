# JavaScript Function: Explicitly Handling Null and Undefined

This repository demonstrates a common error in JavaScript: not explicitly handling `null` and `undefined` values in functions. This can lead to unexpected behavior or runtime errors.

## Bug

The original `foo()` function is intended to double a number but does not handle `null` or `undefined` inputs correctly. This can lead to unexpected results or crashes if these values are passed.

## Solution

The updated `foo()` function incorporates explicit checks for `null` and `undefined` before performing the multiplication. This prevents unexpected outcomes.

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a text editor or IDE.
3. Run the files using a JavaScript interpreter (such as Node.js).