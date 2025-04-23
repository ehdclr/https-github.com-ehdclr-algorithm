const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//LCS(최장 공통 부분 수열)

//모두의 부분수열이 되는 수열중 가장 긴것을 찾는것 
//문자열 모두의 부분수열되는 건 DP 문제 유형 

const A = input[0].trim();
const B = input[1].trim();

const n = A.length;
const m = B.length;

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[n][m]);