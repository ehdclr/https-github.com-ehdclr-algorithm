const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let line = input.slice();
let answer = ""
for (let str of line) {
  if (str == ".") {
    break
  }

  let stack = [];

  for (let char of str) {
    if (char == "(" || char == "[") {
      stack.push(char);
    } else if (char == ")" || char == "]") {
      if (stack[stack.length - 1] == "(" && char == ")") {
        stack.pop()
      } else if (stack[stack.length - 1] == "[" && char == "]") {
        stack.pop()
      } else {
        stack.push(char)
      }
    }
  }

  answer += stack.length >= 1 ? "no\n" : "yes\n"
}

console.log(answer)