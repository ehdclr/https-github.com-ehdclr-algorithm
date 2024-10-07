const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.items[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue() {
    if (this.getLength() == 0) return null;
    let item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }

  peek() {
    return this.items[this.headIndex];
  }
}

let [s, t] = input[0].split(" ").map(Number);

//set로 만들면, 숫자 겹치는거 방지할 수 있음
let visited = new Set([s]);
let found = false;

if(s==t){
    console.log(0)
}

bfs(s);

function bfs(x) {
  let queue = new Queue();
  queue.enqueue([x, ""]);

  while (queue.getLength() > 0) {
    let [cur, answer] = queue.dequeue();
    if(cur >1e9) continue;
    if(cur == t){
        console.log(answer);
        found = true;
        return;
    }
    for(let oper of ["*","+","-","/"]){
        let nxt = cur;
        if(oper == "*"){
            nxt *= cur;
        }
        else if(oper =="+"){
            nxt += cur;
        }
        else if(oper == "-"){
            nxt -= cur;
        }
        else if(oper == "/" && cur !== 0){
            nxt /= cur;
        }
        if(visited.has(nxt)) continue;
        visited.add(nxt);
        queue.enqueue([nxt, answer + oper]);
    }
  }
}


if(!found) console.log(-1)