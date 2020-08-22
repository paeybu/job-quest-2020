const fib = (n) => {
  let a = 1;
  let b = 0;
  let temp;

  while (n >= 1) {
    temp = a;
    a += b;
    b = temp;
    n--;
  }

  return b;
};

console.log(fib(1));
console.log(fib(3));
console.log(fib(12));
