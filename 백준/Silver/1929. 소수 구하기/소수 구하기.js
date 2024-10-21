const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [m, n] = input[0].split(" ").map(Number);

function isPrime(number) {
  if (number <= 1) return false;

  if (number === 2) return true;
  if (number % 2 == 0) return false;
  let sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
    if (number % i == 0) return false;
  }
  return true;
}

let answer = [];
while (n >= m) {
  let cur = n;
  if (isPrime(cur)) answer.push(cur);
  n -= 1;
}

console.log(answer.sort((a, b) => a - b).join("\n"));
