const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//순간이동 현재위치 좌표에서 2 * X
// 걷는 것은  x-1 || x+1 이동

//목적지는 k

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
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const [n, k] = input[0].split(" ").map(Number);
//현재 위치는 n

const MAX = 100001;
let visited = new Array(MAX).fill(0); //각 위치까지 최단시간

function bfs() {
  let queue = new Queue();
  queue.enqueue(n); //초기 위치
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    if (cur === k) {
      return visited[cur]; //최단시간 출력
    }

    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt >= MAX) continue;
      if (visited[nxt] == 0) {
        visited[nxt] = visited[cur] + 1;
        queue.enqueue(nxt);
      }
    }
  }
}

console.log(bfs())