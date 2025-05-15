const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = +input[0];
let students = input[1].split(" ").map(Number);
let stack = [];
let current = 1;

while (students.length > 0) {
  if (students[0] === current) {
    students.shift();
    current++;
  } else if (stack.length > 0 && stack[stack.length - 1] === current) {
    stack.pop();
    current++;
  } else {
    stack.push(students.shift());
  }
}

// 남은 stack 처리
while (stack.length > 0) {
  if (stack[stack.length - 1] === current) {
    stack.pop();
    current++;
  } else {
    break;
  }
}

console.log(stack.length === 0 ? "Nice" : "Sad");