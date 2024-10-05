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

  peek() {
    if (this.getLength() == 0) return null;
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let k = Number(input[0]);
let line = 1;

while (k--) {
  //정점 v 간선 e
  let [v, e] = input[line].split(" ").map(Number);
  let graph = Array.from({ length: v + 1 }, () => []);

  let visited = new Array(v + 1).fill(-1); // 이분법으로 나눌거기 때문에 방문하지 않으면 -1 //짝수 홀수로 구분할것

  for (let i = 0; i < e; i++) {
    let [a, b] = input[line + i + 1].split(" ").map(Number);
    //연결 나타내기
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= v; i++) {
    //방문하지 않았으면 방문해서 bfs
    if (visited[i] == -1) bfs(i, graph, visited);
  }

  line += e +1;
  if (isBipartite(graph, visited)) console.log("YES");
  else console.log("NO");
}

function bfs(x, graph, visited) {
  //x는 초기 시작 노드
  let queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();

    for (let nxt of graph[cur]) {
      if (visited[nxt] == -1) {
        //방문하지 않았으면,
        visited[nxt] = (visited[cur] + 1) % 2;
        queue.enqueue(nxt);
      }
    }
  }
}

//노드 visited 확인해서 순환인지 확인,, -> 같은 그룹이 있으면 안됨

function isBipartite(graph, visited) {
  for (let i = 1; i < visited.length; i++) {
    //노드 확인
    for (let y of graph[i]) if (visited[i] == visited[y]) return false;
  }
  return true;
}
