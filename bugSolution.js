function foo(x){
  if (x === null || x === undefined) {
    return 0; 
  }
  if (!Array.isArray(x)){
    throw new TypeError("Invalid input: expected an array");
  }
  return x.length;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo([1,2,3])); // Output: 3
console.log(foo({a:1,b:2})); // Output: TypeError: Invalid input: expected an array