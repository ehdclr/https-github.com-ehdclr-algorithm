const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

// 잘못된 수를 부를 때마다 0을 외쳐서 
//재민이가 쓴 수를 지우게 시킨다. 

const K = +input[0];

//0일경우 가장 최근에 쓴 수를 지우고 아닐경우에 해당 수를 쓴다 .
const stack = [];
for (let i = 1; i <= K; i++) {
  const num = +input[i];
  if (num == 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}
console.log(stack.reduce((a, b) => a + b, 0));