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
    if (this.getLength == 0) return null;
    let item = this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }

  peek() {
    return this.items[this.headIndex];
  }
}

let testCase = Number(input[0]);
let line = 1;
while (testCase--) {
  const l = Number(input[line]); //체스 한판
  const [curX, curY] = input[line + 1].split(" ").map(Number); //출발 좌표
  const [targetX, targetY] = input[line + 2].split(" ").map(Number); //목적지 좌표

  const visited = Array.from({ length: l }, () => new Array(l).fill(0)); //방문한 것 횟수

  console.log(bfs(l, curX, curY, targetX, targetY, visited));

  line += 3;
}

function bfs(l, x, y, targetX, targetY, visited) {
  let queue = new Queue();
  queue.enqueue([x, y]); //초기 맨처음
  while (queue.getLength() !== 0) {
    let [curX, curY] = queue.dequeue();
    if (curX == targetX && curY == targetY) {
      return visited[targetX][targetY];
    }

    for (let [nxtX, nxtY] of [
      [curX - 1, curY + 2],
      [curX - 1, curY - 2],
      [curX - 2, curY + 1],
      [curX - 2, curY - 1],
      [curX + 1, curY + 2],
      [curX + 1, curY - 2],
      [curX + 2, curY + 1],
      [curX + 2, curY - 1],
    ]) {
      if (nxtX < 0 || nxtX >= l || nxtY < 0 || nxtY >= l) continue;
      if (visited[nxtX][nxtY] == 0) {
        visited[nxtX][nxtY] = visited[curX][curY] + 1;
        queue.enqueue([nxtX, nxtY]);
      }
    }
  }
}
