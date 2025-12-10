const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Queue {
  constructor() {
    this.queue = {}
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.queue[this.tailIndex] = value;
    this.tailIndex++;
  }

  popleft() {
    if (this.getLength() == 0) throw new Error('Queue length is 0');
    let head = this.queue[this.headIndex];
    delete this.queue[this.headIndex];
    this.headIndex++;
    return head;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }

  peek() {
    if (this.getLength() == 0) throw new Error('Queue length is 0');
    return this.queue[this.headIndex];
  }
}

//요세 푸스 문제 

// 1 ~ N번까지 원을 이루면서 안증ㅁ K가 주어짐  N명의 사람이 모두 제거될때까지 계속됨 

//   7 1 2 4 5 -> 3 6
// k번째 cnt = 3 -> cnt  % 3일때 shift
let [n, k] = input[0].split(" ").map(Number);


let cnt = 1;
let q = new Queue();
for (let i = 1; i <= n; i++) q.enqueue(i) //  Queue로 구현하기

let ans = []
while (q.getLength() > 0) {
  let cur = q.popleft();
  if (cnt % k !== 0) {
    q.enqueue(cur); //다시 뒤로넣기 
  } else {
    ans.push(cur)
  }
  cnt++
}

console.log("<" + ans.join(", ") + ">")
