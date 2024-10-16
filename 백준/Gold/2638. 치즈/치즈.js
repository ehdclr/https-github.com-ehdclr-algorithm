const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.items[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue() {
    if (this.getLength() == 0) return null;
    let item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// n * m 모눈 종이에 치즈가 있음

// n이 세로 격장 -> 행 [x][y] [x담당]

// m이 세로 격자 -> 열 [x][y] [y담당]

//2변이상이 실내온도 공기와 접촉하면 한시간만에 녹아짐

//바깥이랑 2변임 -> 내부는 바깥공기로 안침

let [n, m] = input[0].split(" ").map(Number);

let graph = Array.from({ length: n }, () => []);

for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  graph[i - 1] = [...line];
}

// 치즈 안쪽의 공간들은 바깥으로 취급안함

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function bfs() {
  let visited = []; //방문 배열 처리
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false));
  visited[0][0] = true;
  let queue = new Queue();

  queue.enqueue([0, 0]);

  while (queue.getLength() > 0) {
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny] += 1;
        else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}

function melt() {
  let finish = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        finish = false;
      } else if (graph[i][j] == 2) graph[i][j] = 1;
    }
  }
  return finish;
}

let result = 0;
while(true){
  bfs();
  if(melt()){
    console.log(result);
    break;
  }
  else result++;
}
