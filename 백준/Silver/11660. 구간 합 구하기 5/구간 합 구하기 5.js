const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(' ').map(Number);

let matrix = []; // 원본 배열

for (let i = 1; i <= n; i++) {
  matrix.push(input[i].split(' ').map(Number));
}

// DP 배열 (1-indexed로 처리하기 위해 (n+1) x (n+1) 크기)
let dp = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));

// 2차원 누적합 계산
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] = dp[i - 1][j] +           // 위쪽까지의 합
               dp[i][j - 1] -           // 왼쪽까지의 합  
               dp[i - 1][j - 1] +       // 중복 제거
               matrix[i - 1][j - 1];    // 현재 위치 값 추가
  }
}

// 쿼리 처리
for (let i = n + 1; i <= n + m; i++) {
  let [x1, y1, x2, y2] = input[i].split(' ').map(Number);
  
  let result = dp[x2][y2] -           // 전체 구간
               dp[x1 - 1][y2] -       // 위쪽 불필요한 부분 제거
               dp[x2][y1 - 1] +       // 왼쪽 불필요한 부분 제거
               dp[x1 - 1][y1 - 1];   // 두 번 뺀 부분 복구
  
  console.log(result);
}