const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

const edges = input.slice(2, 2 + m).map(line => line.split(" ").map(Number));
const [start, end] = input[2 + m].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
for (let [u, v, w] of edges) {
  graph[u].push({ to: v, cost: w });
}

const INF = Infinity;
const dist = Array(n + 1).fill(INF);
dist[start] = 0;

class Heap {
  constructor(comp) {
    this.heap = [];
    this.comp = comp;
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this._heapifyDown();
    }
    return top;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let idx = this.size() - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.comp(element, this.heap[parentIdx])) {
        this.heap[idx] = this.heap[parentIdx];
        idx = parentIdx;
      } else break;
    }
    this.heap[idx] = element;
  }

  _heapifyDown() {
    let idx = 0;
    const n = this.size();
    const element = this.heap[idx];

    while (idx * 2 + 1 < n) {
      let l = idx * 2 + 1;
      let r = idx * 2 + 2;
      let target = l;

      if (r < n && this.comp(this.heap[r], this.heap[l])) {
        target = r;
      }

      if (this.comp(this.heap[target], element)) {
        this.heap[idx] = this.heap[target];
        idx = target;
      } else break;
    }

    this.heap[idx] = element;
  }
}

const pq = new Heap((a, b) => a.cost < b.cost);
pq.push({ node: start, cost: 0 });

while (pq.size() !== 0) {
  const { node, cost } = pq.pop();
  if (dist[node] < cost) continue;

  for (let nxt of graph[node]) {
    const newCost = cost + nxt.cost;
    if (newCost < dist[nxt.to]) {
      dist[nxt.to] = newCost;
      pq.push({ node: nxt.to, cost: newCost });
    }
  }
}

console.log(dist[end]);