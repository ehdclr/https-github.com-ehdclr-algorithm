const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [a, b, c] = input.map(BigInt);

function modPow(a, b, c) {
  if (b === 0n) return 1n;
  if (b === 1n) return a % c;

  let half = modPow(a, b / 2n, c);
  let result = (half * half) % c;

  if (b % 2n === 1n) {
    result = (result * a) % c;
  }

  return result;
}

console.log(modPow(a, b, c).toString());