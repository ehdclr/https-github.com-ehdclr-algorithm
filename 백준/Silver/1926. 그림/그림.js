const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = 0;
let MAX = 0;
const [N, M] = input[0].split(" ").map(Number);
let matrix = [];

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ").map(Number);
  matrix.push(line);
}

function bfs(x, y) {
  let queue = [[x, y]];
  let area = 1;
  let head = 0;
  
  matrix[x][y] = 0; // 시작점 방문 처리
  
  while (head < queue.length) {
    let [curX, curY] = queue[head++];
    
    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + curX;
      let ny = dy[i] + curY;
      
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && matrix[nx][ny] === 1) {
        queue.push([nx, ny]);
        matrix[nx][ny] = 0; // 방문 처리
        area++;
      }
    }
  }
  
  return area;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (matrix[i][j] === 1) {
      const result = bfs(i, j);
      count++;
      MAX = Math.max(MAX, result);
    }
  }
}

console.log(count);
console.log(MAX);