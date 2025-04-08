const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let visited = Array.from({ length: N }, () => Array(M).fill(false));
let maxSum = 0;

function dfs(x, y, depth, sum) {
  if (depth === 4) {
    maxSum = Math.max(maxSum, sum);
    return;
  }

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];
    if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny]) {
      visited[nx][ny] = true;
      dfs(nx, ny, depth + 1, sum + board[nx][ny]);
      visited[nx][ny] = false;
    }
  }
}

// ㅗ, ㅓ, ㅏ, ㅜ 따로 처리
function checkExtraShape(x, y) {
  const shapes = [
    // ㅗ
    [[0, 0], [0, -1], [0, 1], [-1, 0]],
    // ㅜ
    [[0, 0], [0, -1], [0, 1], [1, 0]],
    // ㅓ
    [[0, 0], [-1, 0], [1, 0], [0, -1]],
    // ㅏ
    [[0, 0], [-1, 0], [1, 0], [0, 1]],
  ];

  for (const shape of shapes) {
    let sum = 0;
    let isValid = true;

    for (const [dx, dy] of shape) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        sum += board[nx][ny];
      } else {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      maxSum = Math.max(maxSum, sum);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, board[i][j]);
    visited[i][j] = false;
    checkExtraShape(i, j); // ㅗ는 DFS로만들 수 없는 모양임 -> 방문한 위치에 다시 연속으로 만들 수 없기때문에
    // 남은 부분에 예외모양으로 채워넣기임
  }
}

console.log(maxSum);
