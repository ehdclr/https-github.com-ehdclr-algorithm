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

// 입력 처리
const [n, m, k, x] = input[0].split(" ").map(Number);

// 그래프 생성
const graph = Array.from({ length: n + 1 }, () => []);

// 도로 정보 입력 처리
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b); // 방향 그래프
}

// BFS 탐색
let visited = new Set([x]);
let queue = new Queue();
queue.enqueue([x, 0]); // 시작점과 거리를 큐에 넣음
let foundCities = [];

while (queue.getLength() > 0) {
  let [cur, dist] = queue.dequeue();

  if (dist == k) {
    foundCities.push(cur); // 거리가 정확히 k인 도시를 저장
  }

  for (let y of graph[cur]) {
    if (!visited.has(y)) {
      visited.add(y); // 방문 체크
      queue.enqueue([y, dist + 1]); // 거리를 1 증가시켜 큐에 넣음
    }
  }
}

// 결과 출력
if (foundCities.length > 0) {
  foundCities.sort((a, b) => a - b); // 도시 번호를 오름차순으로 정렬
  console.log(foundCities.join("\n"));
} else {
  console.log(-1); // 거리가 k인 도시가 없는 경우
}