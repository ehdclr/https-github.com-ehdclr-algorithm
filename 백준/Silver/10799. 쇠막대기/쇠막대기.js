const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let s = input[0].trim()
let stack = []
let pieces = 0;


for (let i = 0; i < s.length; i++) {
  if (s[i] == "(") {
    stack.push("(")
  } else {
    // ) 닫는 거 일때,
    stack.pop()
    if (i > 0 && s[i - 1] === "(") {
      pieces += stack.length;
    } else {
      pieces += 1
    }
  }
}

console.log(pieces)