function foo(x) {
  if (x === null) {
    return 0; // Handle null explicitly
  } else if (x === undefined) {
    return 1; // Handle undefined explicitly
  } else if (typeof x !== 'number') {
    return NaN; // Or throw an error, depending on your needs
  }
  return x * 2; // Your original function
}

console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(5));      // Output: 10
console.log(foo('abc'));   // Output: NaN