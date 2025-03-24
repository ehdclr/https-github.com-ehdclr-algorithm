const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let idx = 1;

class Heap {
  constructor(comp) {
    this.data = [];
    this.comp = comp;
  }

  push(val) {
    this.data.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.size() > 0) {
      this.data[0] = end;
      this._heapifyDown();
    }
    return top;
  }

  peek() {
    return this.data[0] ?? null;
  }

  size() {
    return this.data.length;
  }

  _heapifyUp() {
    let i = this.size() - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.comp(this.data[i], this.data[p])) {
        [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
        i = p;
      } else break;
    }
  }

  _heapifyDown() {
    let i = 0;
    const n = this.size();
    while (2 * i + 1 < n) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let target = left;

      if (right < n && this.comp(this.data[right], this.data[left])) {
        target = right;
      }

      if (this.comp(this.data[target], this.data[i])) {
        [this.data[i], this.data[target]] = [this.data[target], this.data[i]];
        i = target;
      } else break;
    }
  }
}

for (let t = 0; t < T; t++) {
  const k = parseInt(input[idx++]);
  const minHeap = new Heap((a, b) => a < b);
  const maxHeap = new Heap((a, b) => a > b);
  const countMap = new Map();

  for (let i = 0; i < k; i++) {
    const [cmd, valStr] = input[idx++].split(' ');
    const val = parseInt(valStr);

    if (cmd === 'I') {
      minHeap.push(val);
      maxHeap.push(val);
      countMap.set(val, (countMap.get(val) || 0) + 1);
    } else {
      const targetHeap = val === 1 ? maxHeap : minHeap;

      while (targetHeap.size()) {
        const num = targetHeap.pop();
        if (countMap.get(num)) {
          countMap.set(num, countMap.get(num) - 1);
          break;
        }
      }
    }
  }

  let max = null;
  let min = null;

  while (maxHeap.size()) {
    const num = maxHeap.pop();
    if (countMap.get(num)) {
      max = num;
      break;
    }
  }

  while (minHeap.size()) {
    const num = minHeap.pop();
    if (countMap.get(num)) {
      min = num;
      break;
    }
  }

  if (max === null || min === null) {
    console.log('EMPTY');
  } else {
    console.log(`${max} ${min}`);
  }
}