const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let line = input.slice()
let answer = ""

for (let i = 0; i < line.length; i++) {
  let str = line[i];
  let stack = [];
  if (str == ".") break;


  for (let char of str) {
    if (char == "(" || char == "[") {
      stack.push(char)
    } else if (char == "]" || char == ")") {
      if (char == ")" && stack[stack.length - 1] == "(") {
        stack.pop()
      } else if (char == "]" && stack[stack.length - 1] == "[") {
        stack.pop()
      } else stack.push(char)
    }
  }

  answer += stack.length >= 1 ? "no\n" : "yes\n";
}

console.log(answer)

