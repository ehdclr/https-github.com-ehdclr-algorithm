const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = +input[0];
let students = input[1].split(" ").map(Number);
let current = 1;
let stack = []

while (students.length != 0) {
  if (current == students[0]) {
    students.shift();
    current++;
  } else if (stack.length > 0 && stack[stack.length - 1] == current) {
    stack.pop()
    current++
  } else {
    stack.push(students.shift())
  }
}

while (current <= N) {
  if (current == stack[stack.length - 1]) {
    stack.pop()
    current++;
  } else {
    break;
  }
}

console.log(stack.length >= 1 ? "Sad" : "Nice")