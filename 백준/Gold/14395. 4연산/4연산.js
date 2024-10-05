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

  peek() {
    if (this.getLength() == 0) return null;
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const [s,t] = input[0].split(" ").map(Number);
if(s == t){
  console.log(0)
  return;
}
//자기자신을 연산을 하는거여서

let visited = new Set([s]);
let found = false;
bfs(s)

function bfs(x){
  let queue = new Queue();
  queue.enqueue([x,""]);

  while(queue.getLength() !=0){
    let [cur, opers] = queue.dequeue();
    if(cur > 1e9) continue;
    
    if(cur == t){
      console.log(opers);
      found = true;
      break;
    }
    for (let oper of ["*","+","-","/"]){
      let nextValue = cur;
      if(oper == "*") nextValue *= cur;
      if(oper == "+") nextValue += cur;
      if(oper == "-") nextValue -= cur;
      if(oper == "/" && cur != 0) nextValue /= cur;
      if(!visited.has(nextValue)){
        queue.enqueue([nextValue,opers + oper]);
        visited.add(nextValue)
      }

    }

  }
}

if (!found){
  console.log(-1);
}