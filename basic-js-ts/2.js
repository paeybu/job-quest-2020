function shift(arr, direction, n) {
  if (direction === 'left') {
    let result = arr.slice(n).concat(arr.slice(0, n));
    return result;
  }
  let result = arr.slice(arr.length - n).concat(arr.slice(0, arr.length - n));
  return result;
}

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4, 5], 'right', 3));
