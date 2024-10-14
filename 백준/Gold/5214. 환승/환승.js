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

const [n, k, m] = input[0].split(" ").map(Number);

// 역과 하이퍼튜브 노드를 위한 그래프 크기 설정
let graph = Array.from({ length: n + m + 1 }, () => new Array());

// 하이퍼 튜브 (하이퍼튜브는 가상 노드로 처리)
for (let i = 1; i <= m; i++) {
  let line = input[i].split(" ").map(Number);
  for (let x of line) {
    graph[x].push(n + i);      // 역에서 하이퍼튜브 노드로 연결
    graph[n + i].push(x);      // 하이퍼튜브에서 역으로 연결
  }
}

// 1번 역에서 목적지 n번 역으로 가는 최소 거리 계산
let visited = new Set([1]); // 1번 역을 방문 처리
let queue = new Queue();
queue.enqueue([1, 1]); // 거리 1, 역 번호 1로 시작

let found = false;

while (queue.getLength() > 0) {
  let [dist, now] = queue.dequeue();

  // 목적지 n번 역에 도달하면 종료
  if (now == n) {
    console.log(Math.floor(dist / 2) + 1); // 하이퍼튜브를 거쳐가는 경우의 거리 계산
    found = true;
    break;
  }

  // 현재 역(또는 하이퍼튜브)에서 연결된 다음 노드 처리
  for (let nxt of graph[now]) {
    if (!visited.has(nxt)) {
      queue.enqueue([dist + 1, nxt]); // 거리를 증가시키고 다음 노드 탐색
      visited.add(nxt);               // 다음 노드 방문 처리
    }
  }
}

// 도달할 수 없는 경우
if (!found) console.log(-1);