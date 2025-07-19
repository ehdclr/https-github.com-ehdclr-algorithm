const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const T = Number(input[0]);

let answer = ""

for (let i = 1; i <= T; i++) {
  let str = input[i];
  let stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char)
    } else if (char === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop()
      } else {
        stack.push(char)
      }
    }
  }
  if (stack.length > 0) {
    answer += "NO\n"
  } else {
    answer += "YES\n"
  }
}

console.log(answer)