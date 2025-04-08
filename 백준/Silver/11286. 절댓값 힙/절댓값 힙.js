const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Heap {
  constructor(comp) {
    this.heap = [];
    this.comp = comp;
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.getLength() === 0) return null;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }
    return top;
  }

  peek() {
    return this.heap[0] ?? null;
  }

  getLength() {
    return this.heap.length;
  }

  _heapifyUp() {
    let idx = this.getLength() - 1;
    while (idx > 0) {
      const p = Math.floor((idx - 1) / 2);
      if (this.comp(this.heap[idx], this.heap[p])) {
        [this.heap[idx], this.heap[p]] = [this.heap[p], this.heap[idx]];
        idx = p;
      } else break;
    }
  }

  _heapifyDown() {
    let idx = 0;
    const n = this.getLength();
    while (idx * 2 + 1 < n) {
      let l = idx * 2 + 1;
      let r = idx * 2 + 2;
      let target = l;

      if (r < n && this.comp(this.heap[r], this.heap[l])) {
        target = r;
      }

      if (this.comp(this.heap[target], this.heap[idx])) {
        [this.heap[target], this.heap[idx]] = [this.heap[idx], this.heap[target]];
        idx = target;
      } else break;
    }
  }
}

let n = Number(input[0]);
let line = 1;
let answer = "";

let minH = new Heap((a, b) => {
  return Math.abs(a) === Math.abs(b) ? a < b : Math.abs(a) < Math.abs(b);
});

while (n--) {
  const num = Number(input[line++]);
  if (num === 0) {
    let val = minH.pop();
    answer += (val ?? 0) + "\n";
  } else {
    minH.push(num);
  }
}

console.log(answer);
