const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [n, k] = input[0].split(' ').map(Number);
const wArr = [0];
const cArr = [0];

for (let i = 1; i <= n; i++) {
  const [w, v] = input[i].split(' ').map(Number);
  wArr.push(w);
  cArr.push(v);
}

let dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));

for (let y = 1; y <= n; y++) {
  for (let x = 0; x <= k; x++) {
    if (x < wArr[y]) {
      dp[y][x] = dp[y - 1][x];
      continue;
    }
    dp[y][x] = Math.max(dp[y - 1][x], dp[y - 1][x - wArr[y]] + cArr[y]);
  }
}

console.log(dp[n][k])