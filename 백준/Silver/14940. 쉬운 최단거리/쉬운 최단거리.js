const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(false));
const answer = Array.from({ length: n }, () => Array(m).fill(0));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let startX, startY;

// 목표지점(2) 위치 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] === 2) {
      startX = i;
      startY = j;
    }
  }
}

// BFS 시작
const queue = [[startX, startY]];
visited[startX][startY] = true;

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (visited[nx][ny]) continue;
    if (matrix[nx][ny] === 0) continue; // 벽

    visited[nx][ny] = true;
    answer[nx][ny] = answer[x][y] + 1;
    queue.push([nx, ny]);
  }
}

// 출력용 처리
let output = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] === 0) {
      output += "0 ";
    } else if (matrix[i][j] === 2) {
      output += "0 ";
    } else if (!visited[i][j]) {
      output += "-1 ";
    } else {
      output += answer[i][j] + " ";
    }
  }
  output += "\n";
}

console.log(output);