const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");


//전형적인 dp 문제 이전 상태를 memo 해서 bottom up 방식

let dp = [];
dp.push(1) //0
dp.push(1) //1
dp.push(3) //2



let n = Number(input[0])
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[n])


