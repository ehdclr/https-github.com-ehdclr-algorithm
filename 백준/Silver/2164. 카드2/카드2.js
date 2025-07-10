const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

class Queue {
  constructor() {
    this.queue = {}
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.queue[this.tailIndex] = value;
    this.tailIndex += 1
  }

  dequeue() {
    if (this.getLength() == 0) return null;
    const top = this.queue[this.headIndex]
    delete this.queue[this.headIndex]
    this.headIndex += 1
    return top;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}


const n = Number(input[0]);

let q = new Queue()
for (let i = 1; i <= n; i++) q.enqueue(i)

while (q.getLength() > 1) {
  q.dequeue()
  if (q.getLength() > 0) {
    //있는 순간에 
    q.enqueue(q.dequeue())
  }
}

console.log(q.dequeue())

