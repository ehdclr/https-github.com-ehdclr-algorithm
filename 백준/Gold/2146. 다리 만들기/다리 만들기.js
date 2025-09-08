const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const grid = [];
for (let i = 1; i <= n; i++) {
  grid.push(input[i].split(' ').map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// BFS로 한 섬의 모든 육지를 같은 번호로 라벨링
function bfs(startX, startY, islandId) {
  const queue = [[startX, startY]];
  grid[startX][startY] = islandId;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1) {
        grid[nx][ny] = islandId;
        queue.push([nx, ny]);
      }
    }
  }
}

// 특정 섬에서 다른 섬까지의 최단 거리 찾기
function findBridgeFromIsland(islandId) {
  const queue = [];
  const dist = Array.from({ length: n }, () => Array(n).fill(-1));

  // 해당 섬의 경계만 큐에 넣기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === islandId) {
        // 인접한 곳에 바다가 있는지 확인
        let isBorder = false;
        for (let k = 0; k < 4; k++) {
          const ni = i + dx[k];
          const nj = j + dy[k];
          if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] === 0) {
            isBorder = true;
            break;
          }
        }

        if (isBorder) {
          queue.push([i, j, 0]);
          dist[i][j] = 0;
        }
      }
    }
  }

  // BFS
  while (queue.length > 0) {
    const [x, y, d] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      // 바다인 경우
      if (grid[nx][ny] === 0 && dist[nx][ny] === -1) {
        dist[nx][ny] = d + 1;
        queue.push([nx, ny, d + 1]);
      }
      // 다른 섬인 경우
      else if (grid[nx][ny] >= 2 && grid[nx][ny] !== islandId) {
        return d;
      }
    }
  }

  return Infinity;
}

// 메인 실행
let islandNum = 2;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === 1) {
      bfs(i, j, islandNum);
      islandNum++;
    }
  }
}

// 모든 섬에서 다른 섬까지의 최단 거리 중 최솟값 찾기
let minBridge = Infinity;
for (let island = 2; island < islandNum; island++) {
  const bridgeLength = findBridgeFromIsland(island);
  minBridge = Math.min(minBridge, bridgeLength);
}

console.log(minBridge);