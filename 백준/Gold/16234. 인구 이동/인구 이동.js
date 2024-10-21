const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Queue {
  constructor() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.queue[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue() {
    if (this.getLength() == 0) return null;
    let item = this.peek();
    delete this.queue[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    if (this.getLength() == 0) return null;
    return this.queue[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let [n, l, r] = input[0].split(" ").map(Number);
let graph = Array.from({ length: n }, () => []);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  graph[i - 1] = [...line];
}

//인구 이동이 일어나는 total Index =
let totalCount = 0;

//연합은 최대 n * n 까지 가능하다.

while (true) {
  let union = Array.from({ length: n }, () => new Array(n).fill(-1));
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] == -1) {
        //유니온 처리가 안됐으면

        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index == n * n) break;
  totalCount += 1;
}

console.log(totalCount);

function bfs(x, y, index, union) {
  let united = [[x, y]]; //초기 연합
  let q = new Queue();
  union[x][y] = index;
  q.enqueue([x, y]);
  let summary = graph[x][y]; // 연합의 합
  let cnt = 1;
  while (q.getLength() > 0) {
    let [curX, curY] = q.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] == -1) {
        let dif = Math.abs(graph[nx][ny] - graph[curX][curY]);
        if (l <= dif && dif <= r) {
          q.enqueue([nx, ny]);
          union[nx][ny] = index;
          summary += graph[nx][ny];
          cnt += 1;
          united.push([nx, ny]);
        }
      }
    }
  }

  for (let unit of united) {
    let [i, j] = unit;
    graph[i][j] = parseInt(summary / cnt);
  }
}
