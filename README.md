# JavaScript Bug: Unexpected 'undefined' Return for Non-Array Objects

This repository demonstrates a common JavaScript bug related to handling the length property of objects that aren't arrays.  The `foo` function aims to return the length of an array, but it doesn't properly handle cases where a non-array object is passed as an argument. This leads to an 'undefined' return value instead of a more descriptive error.

## Bug Description

The `bug.js` file contains the buggy implementation.  The function `foo` tries to access the `length` property directly. If a non-array object (like an object literal) is passed, this property is undefined, resulting in the unexpected output.

## Solution

The `bugSolution.js` file provides a corrected version of the function that explicitly checks if the input is an array before accessing its `length` property. This improves the robustness and predictability of the function, throwing a TypeError if the input is not an array.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js` to observe the original buggy behavior.
3. Run `node bugSolution.js` to see the fixed version.