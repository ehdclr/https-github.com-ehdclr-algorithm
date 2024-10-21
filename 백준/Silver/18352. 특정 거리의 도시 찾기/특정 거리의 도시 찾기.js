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

// 1 ~ n 도시 m개의 (단방향 도로)-> 모든 도로 거리 1

//도시 x -> 최단거리 k인 모든 도시들의 번호 출력
//다익스트라 해도 됨
// 한 도시에서 최단거리 도시

let [n, m, k, x] = input[0].split(" ").map(Number);
let graph = Array.from({ length: n + 1 }, () => []);
//방향 그래프 만들기
let visited = new Array(n + 1).fill(false);
let flags = false;
let result = [];

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b); //방향 그래프
}

//x로부터 거리가 k인 도시의 목록 리스트
let queue = new Queue();
queue.enqueue([x, 0]); //첫 노드에서 누적
visited[x] = true;

while (queue.getLength() > 0) {
  let [curNode, dist] = queue.dequeue();
  if (dist == k) {
    //현재 노드 누적이면
    result.push(curNode);
    flags = true;
  }
  for (let nx of graph[curNode]) {
    //다음 노드
    if (!visited[nx]) {
      //방문하지 않았다면
      queue.enqueue([nx, dist + 1]);
      visited[nx] = true;
    }
  }
}

if (!flags) console.log(-1);
else console.log(result.sort((a, b) => a - b).join("\n"));
