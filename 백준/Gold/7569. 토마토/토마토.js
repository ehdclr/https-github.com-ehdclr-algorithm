const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [m, n, h] = input[0].split(' ').map(Number);

let wholeBox = [];
let queue = [];
let totalTomatoes = 0; // 총 토마토 개수
let ripeTomatoes = 0; // 익은 토마토 개수

// 방향 벡터 (위, 아래, 왼쪽, 오른쪽, 앞, 뒤)
let dx = [-1, 1, 0, 0, 0, 0];
let dy = [0, 0, -1, 1, 0, 0];
let dz = [0, 0, 0, 0, -1, 1];

// 3차원 배열 만들기
for (let i = 0, index = 1; i < h; i++) {
  let layer = [];
  for (let j = 0; j < n; j++, index++) {
    let row = input[index].split(' ').map(Number);
    layer.push(row);

    for (let k = 0; k < m; k++) {
      if (row[k] === 1) {
        queue.push([i, j, k, 0]); // (높이, 세로, 가로, 익는 날짜)
        ripeTomatoes++;
      }
      if (row[k] !== -1) {
        totalTomatoes++;
      }
    }
  }
  wholeBox.push(layer);
}

// BFS 시작
let maxDays = 0;
let index = 0; // 큐 인덱스 (shift() 대신 사용하여 성능 향상)

while (index < queue.length) {
  let [z, x, y, days] = queue[index++];
  maxDays = Math.max(maxDays, days);

  for (let i = 0; i < 6; i++) {
    let nz = z + dz[i];
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && nz >= 0 && nz < h) {
      if (wholeBox[nz][nx][ny] === 0) {
        wholeBox[nz][nx][ny] = 1;
        queue.push([nz, nx, ny, days + 1]);
        ripeTomatoes++;
      }
    }
  }
}

// 모든 토마토가 익었는지 확인
if (ripeTomatoes === totalTomatoes) {
  console.log(maxDays);
} else {
  console.log(-1);
}