const isFizz = (n) => n % 3 === 0;
const isBuzz = (n) => n % 5 === 0;
const isFizzBuzz = (n) => isFizz(n) && isBuzz(n);
const fizzBuzz = (n) =>
  (isFizzBuzz(n) && 'FizzBuzz') ||
  (isFizz(n) && 'Fizz') ||
  (isBuzz(n) && 'Buzz');

console.log(fizzBuzz(21));
console.log(fizzBuzz(18));
console.log(fizzBuzz(45));
