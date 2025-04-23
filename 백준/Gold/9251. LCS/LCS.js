const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let A = input[0].trim();
let B = input[1].trim();

let n = A.length;
let m = B.length;

let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));


for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (A[i - 1] == B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1 //길이가 1늘어남
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) // 그 이전 알파벳
    }
  }
}

console.log(dp[n][m])
