const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);

function countTrailingZeros(n) {
  let count = 0;
  let divisor = 5;

  while (divisor <= n) {
    count += Math.floor(n / divisor);
    divisor *= 5;
  }

  return count;
}

console.log(countTrailingZeros(N));