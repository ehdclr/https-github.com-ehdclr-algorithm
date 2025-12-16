const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Heap {
  constructor(comp) {
    this.heap = [];
    this.comp = comp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);  // ✅ 수정
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

  enqueue(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  popleft() {
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

      if (this.comp(this.heap[index], this.heap[parentIdx])) {
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
        this.comp(this.heap[rightChildIndex], this.heap[leftChildIndex])) {
        targetIndex = rightChildIndex;
      }

      if (this.comp(this.heap[index], this.heap[targetIndex])) {
        break;
      }

      this.swap(index, targetIndex);
      index = targetIndex;
    }
  }

  print() {
    console.log(this.heap)
  }
}

const N = Number(input[0]);
const hp = new Heap(function (a, b) {
  return a > b;
})
let answer = ""
for (let i = 1; i <= N; i++) {
  let x = Number(input[i]);

  if (x == 0) {
    if (hp.isEmpty()) answer += "0" + "\n"
    else {
      const max = hp.popleft();
      answer += max + "\n"
    }
    continue;
  }
  hp.enqueue(x)
}

console.log(answer)