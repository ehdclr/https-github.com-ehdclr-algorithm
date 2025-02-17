const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const stairs = input.slice(1).map(Number);

if (n === 1) {
  console.log(stairs[0]);
  return;
}

let dp = new Array(n).fill(0);
dp[0] = stairs[0];
dp[1] = stairs[0] + stairs[1];

if (n > 2) {
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]); // 1번 계단 밟고 3번 or 2번, 3번 계단
}

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i], // 2칸 전에서 올라오는 경우
    dp[i - 3] + stairs[i - 1] + stairs[i] // 3칸 전에서 올라와 2칸 연속 오르는 경우
  );
}

console.log(dp[n - 1]); // 마지막 계단을 밟을 때의 최대 점수