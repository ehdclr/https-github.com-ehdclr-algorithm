const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = Number(input[0]);
const matrix = []
for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ").map(Number);
  matrix.push(line);
}

// 3차원 배열: dp[y][x][direction]
// direction: 0=가로, 1=세로, 2=대각선
let dp = Array.from({ length: N }, () => 
  Array.from({ length: N }, () => new Array(3).fill(-1))
);

function dfs(x, y, direction) {
  if (x == N - 1 && y == N - 1) return 1;

  // 이미 계산한 상태면 반환
  if (dp[y][x][direction] !== -1) {
    return dp[y][x][direction];
  }

  let count = 0;

  if (direction === 0) { // 가로
    if (x + 1 < N && matrix[y][x + 1] == 0) {
      count += dfs(x + 1, y, 0);
    }
    if (x + 1 < N && y + 1 < N && 
        matrix[y][x + 1] == 0 && matrix[y + 1][x] == 0 && matrix[y + 1][x + 1] == 0) {
      count += dfs(x + 1, y + 1, 2);
    }
  } else if (direction === 1) { // 세로
    if (y + 1 < N && matrix[y + 1][x] == 0) {
      count += dfs(x, y + 1, 1);
    }
    if (x + 1 < N && y + 1 < N && 
        matrix[y][x + 1] == 0 && matrix[y + 1][x] == 0 && matrix[y + 1][x + 1] == 0) {
      count += dfs(x + 1, y + 1, 2);
    }
  } else if (direction === 2) { // 대각선
    if (x + 1 < N && matrix[y][x + 1] == 0) {
      count += dfs(x + 1, y, 0);
    }
    if (y + 1 < N && matrix[y + 1][x] == 0) {
      count += dfs(x, y + 1, 1);
    }
    if (x + 1 < N && y + 1 < N && 
        matrix[y][x + 1] == 0 && matrix[y + 1][x] == 0 && matrix[y + 1][x + 1] == 0) {
      count += dfs(x + 1, y + 1, 2);
    }
  }

  dp[y][x][direction] = count;
  return count;
}

console.log(dfs(1, 0, 0));