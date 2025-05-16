const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Deque {
  constructor() {
    this.data = {};
    this.frontIdx = 0;
    this.backIdx = 0;
  }

  push_front(x) {
    this.data[--this.frontIdx] = x;
  }

  push_back(x) {
    this.data[this.backIdx++] = x;
  }

  pop_front() {
    if (this.empty()) return -1;
    const val = this.data[this.frontIdx];
    delete this.data[this.frontIdx++];
    return val;
  }

  pop_back() {
    if (this.empty()) return -1;
    const val = this.data[--this.backIdx];
    delete this.data[this.backIdx];
    return val;
  }

  size() {
    return this.backIdx - this.frontIdx;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    return this.empty() ? -1 : this.data[this.frontIdx];
  }

  back() {
    return this.empty() ? -1 : this.data[this.backIdx - 1];
  }
}

const N = parseInt(input[0]);
const dq = new Deque();
const result = [];

for (let i = 1; i <= N; i++) {
  const [cmd, val] = input[i].split(" ");

  switch (cmd) {
    case "1":
      dq.push_front(Number(val));
      break;
    case "2":
      dq.push_back(Number(val));
      break;
    case "3":
      result.push(dq.pop_front());
      break;
    case "4":
      result.push(dq.pop_back());
      break;
    case "5":
      result.push(dq.size());
      break;
    case "6":
      result.push(dq.empty());
      break;
    case "7":
      result.push(dq.front());
      break;
    case "8":
      result.push(dq.back());
      break;
  }
}

console.log(result.join("\n"));