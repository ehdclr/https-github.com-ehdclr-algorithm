const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);

function gcd(a, b) {
  while (b !== 0) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(a, b))
console.log(lcm(a, b))