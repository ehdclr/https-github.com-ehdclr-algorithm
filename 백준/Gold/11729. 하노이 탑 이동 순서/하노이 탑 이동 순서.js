const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const k = Number(input[0]);
let answer = ""

function recur(a, b, n) {
  if (n === 1) {
    answer += a + " " + b + "\n";
    return;
  }

  recur(a, 6 - a - b, n - 1);
  answer += a + " " + b + "\n";
  recur(6 - a - b, b, n - 1);
}

console.log(Math.pow(2, k) - 1);
recur(1, 3, k);
console.log(answer)