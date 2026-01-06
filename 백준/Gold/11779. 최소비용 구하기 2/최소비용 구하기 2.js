const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Heap {
  constructor(comp) {
    this.heap = [];
    this.comp = comp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  heappush(weight, val) {
    this.heap.push({ weight, val });
    this.heapifyUp();
  }

  heappop() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  getLength() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIdx = this.getParentIndex(index);

      if (this.comp(this.heap[index].weight, this.heap[parentIdx].weight)) {
        this.swap(index, parentIdx);
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      let targetIndex = leftChildIndex;

      if (rightChildIndex < this.heap.length &&
        this.comp(this.heap[rightChildIndex].weight, this.heap[leftChildIndex].weight)) {
        targetIndex = rightChildIndex;
      }

      if (this.comp(this.heap[index].weight, this.heap[targetIndex].weight)) {
        break;
      }

      this.swap(index, targetIndex);
      index = targetIndex;
    }
  }
}

const n = Number(input[0]);
const m = Number(input[1]);

const arr = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i <= m + 1; i++) {
  let [u, v, w] = input[i].split(" ").map(Number);
  arr[u].push([v, w]);
}

const [a, b] = input[m + 2].split(" ").map(Number);

const INF = Infinity;
const cost = new Array(n + 1).fill(INF);
const parent = new Array(n + 1).fill(-1);

const hp = new Heap((a, b) => {
  if (a.weight !== b.weight) return a.weight < b.weight;
  return a.val < b.val;
});

hp.heappush(0, a);
cost[a] = 0;


while (!hp.isEmpty()) {
  let { weight: c, val: x } = hp.heappop();

  if (cost[x] < c) continue;

  for (const [nxt, dist] of arr[x]) {
    if (cost[nxt] > c + dist) {
      cost[nxt] = c + dist;
      parent[nxt] = x;
      hp.heappush(cost[nxt], nxt);
    }
  }
}

if (cost[b] === INF) {
  console.log(-1); // 또는 문제 요구사항에 따라
} else {
  const path = []; // ✅ let → const
  let current = b;

  while (current !== -1) {
    path.push(current);
    current = parent[current];
  }
  path.reverse();

  console.log(cost[b]);
  console.log(path.length);
  console.log(path.join(' '));
}