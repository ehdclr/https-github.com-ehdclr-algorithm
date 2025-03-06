const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getLength() {
    return this.heap.length;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  heapifyUp() {
    let index = this.getLength() - 1;

    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  insertValue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  getMin() {
    if (this.getLength() === 0) return 0; // 문제 요구사항: 비어있으면 0 반환
    if (this.getLength() === 1) return this.heap.pop(); // 요소가 하나만 있다면 바로 제거

    let min = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 요소를 루트로 이동 후 정리
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (true) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;

      if (leftChildIndex < this.getLength() && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < this.getLength() && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }
}

const n = Number(input[0]);
let result = [];
let hp = new MinHeap();

for (let i = 1; i <= n; i++) {
  const x = parseInt(input[i]);
  if (x === 0) {
    result.push(hp.getMin());
  } else {
    hp.insertValue(x);
  }
}

console.log(result.join('\n'));
