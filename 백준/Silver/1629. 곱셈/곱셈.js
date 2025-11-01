const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [a, b, c] = input.map(BigInt);

function modPow(base, exp, mod) {
  if (exp === 0n) return 1n;
  if (exp === 1n) return base % mod;

  let half = modPow(base, exp / 2n, mod);
  let result = (half * half) % mod;

  if (exp % 2n === 1n) {
    result = (result * base) % mod;
  }
  return result;
}

console.log(modPow(a, b, c).toString());
