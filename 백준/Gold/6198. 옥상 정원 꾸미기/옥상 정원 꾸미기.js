const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const towers = [];

for (let i = 1; i <= n; i++) towers.push(Number(input[i])); //높이만 

let stack = []; //[인덱스, 높이]
let answer = 0;

for (let i = 0; i < n; i++) {
  //stack 에 대한 검사
  // 그리고 현재 타워보다 낮으면, 빼야함
  while (stack.length > 0 && stack[stack.length - 1][1] <= towers[i]) {
    stack.pop()
  }

  //남아 있는 것들은 현재 타워를 볼 수 있는 것이기 때문에 더하기
  answer += stack.length;

  stack.push([i, towers[i]])
}

console.log(answer);