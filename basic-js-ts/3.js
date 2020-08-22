const secondMax = (arr) => {
  if (arr.length === 0) {
    return 'Error!';
  }
  const sorted = arr.sort((a, b) => b - a);
  const uniq = [...new Set(sorted)];
  if (uniq.length > 1) {
    return uniq[1];
  }
  return uniq[0];
};

console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
console.log(secondMax([]));
