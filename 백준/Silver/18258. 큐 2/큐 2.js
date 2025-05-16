const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.queue[this.tailIndex++] = value;
  }

  dequeue() {
    if (this.size() === 0) return -1;
    const value = this.queue[this.headIndex];
    delete this.queue[this.headIndex++];
    return value;
  }

  front() {
    return this.size() === 0 ? -1 : this.queue[this.headIndex];
  }

  back() {
    return this.size() === 0 ? -1 : this.queue[this.tailIndex - 1];
  }

  size() {
    return this.tailIndex - this.headIndex;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }
}

const N = parseInt(input[0]);
const q = new Queue();
const result = [];

for (let i = 1; i <= N; i++) {
  const [cmd, value] = input[i].split(" ");

  if (cmd === "push") {
    q.enqueue(Number(value));
  } else if (cmd === "pop") {
    result.push(q.dequeue());
  } else if (cmd === "size") {
    result.push(q.size());
  } else if (cmd === "empty") {
    result.push(q.empty());
  } else if (cmd === "front") {
    result.push(q.front());
  } else if (cmd === "back") {
    result.push(q.back());
  }
}

console.log(result.join("\n"));