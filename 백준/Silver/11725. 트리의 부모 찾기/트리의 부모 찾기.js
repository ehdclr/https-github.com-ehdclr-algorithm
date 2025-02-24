const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

class Queue {
  constructor(){
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value){
    this.queue[this.tailIndex++] = value;
  }

  dequeue(){
    if (this.headIndex === this.tailIndex) return null;
    const value = this.queue[this.headIndex];
    delete this.queue[this.headIndex++];
    return value;
  }

  getLength(){
    return this.tailIndex - this.headIndex;
  }
}

const n = Number(input[0]);
const nodes = Array.from({length: n + 1}, () => []);  // 인접 리스트
const parent = new Array(n + 1).fill(0);

// 트리 정보 입력 받기
for (let i = 1; i < n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  nodes[a].push(b);
  nodes[b].push(a);
}

// BFS 실행
function bfs() {
  const queue = new Queue();
  queue.enqueue(1);
  parent[1] = -1;  // 루트 노드는 부모가 없음 (-1 처리)

  while (queue.getLength() > 0) {
    const curNode = queue.dequeue();
    for (const neighbor of nodes[curNode]) {
      if (parent[neighbor] === 0) {  // 방문하지 않은 노드
        parent[neighbor] = curNode;  // 부모 설정
        queue.enqueue(neighbor);
      }
    }
  }
}

bfs();

// 결과 출력 (2번 노드부터 n번 노드까지)
console.log(parent.slice(2).join("\n"));