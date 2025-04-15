const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let t = 1; t <= T; t++) {
  let [M, N, x, y] = input[t].split(" ").map(Number);

  const limit = lcm(M, N);
  let year = x;

  while (year <= limit) {
    if ((year - 1) % N + 1 === y) {
      console.log(year);
      break;
    }
    year += M;
  }

  if (year > limit) console.log(-1);
}