const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const matrix = [];
for (let i = 1; i <= n; i++) {
  matrix.push(input[i].split("").map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  // visited[x][y][wall] - wall: 0(벽을 안 부숨), 1(벽을 부숨)
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => [false, false]) //[벽안부숨 ,부숨]
  );

  const queue = [];
  queue.push([0, 0, 0, 1]); // [x, y, wall_broken, distance] // 
  visited[0][0][0] = true;

  let front = 0;

  while (front < queue.length) {
    const [curX, curY, wallBroken, dist] = queue[front++];

    // 목표 지점 도달
    if (curX === n - 1 && curY === m - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        // 빈 공간으로 이동
        if (matrix[nx][ny] === 0 && !visited[nx][ny][wallBroken]) {
          visited[nx][ny][wallBroken] = true;
          queue.push([nx, ny, wallBroken, dist + 1]);
        }
        // 벽을 부수고 이동 (아직 벽을 부수지 않은 경우만)
        else if (matrix[nx][ny] === 1 && wallBroken === 0 && !visited[nx][ny][1]) {
          visited[nx][ny][1] = true;
          queue.push([nx, ny, 1, dist + 1]);
        }
      }
    }
  }

  return -1;
}

console.log(bfs());