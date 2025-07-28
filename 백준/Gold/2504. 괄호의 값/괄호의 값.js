const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


const s = input[0].split("");

const stack = []
let result = 0;
let temp = 1;
let isValid = true;

for (let i = 0; i < s.length; i++) {
  if (s[i] == "(") {
    stack.push(s[i]);
    temp *= 2;
  } else if (s[i] == "[") {
    stack.push(s[i]);
    temp *= 3;
  } else if (s[i] == ")") {
    if (stack.length == 0 || stack[stack.length - 1] !== "(") {
      isValid = false;
      break;
    }
    if (s[i - 1] == "(") {
      result += temp;
    }
    temp = Math.floor(temp / 2)
    stack.pop()
  } else if (s[i] == "]") {
    if (stack.length == 0 || stack[stack.length - 1] !== "[") {
      isValid = false;
      break;
    }
    if (s[i - 1] == "[") {
      result += temp;
    }
    temp = Math.floor(temp / 3)
    stack.pop()
  }
}

console.log(isValid && stack.length === 0 ? result : 0)