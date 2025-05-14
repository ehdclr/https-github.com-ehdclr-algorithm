const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//괄호 문자열 

//

let T = +input[0];


let answer = "";
let line = 1;

while (T--) {
  let str = input[line].split("");
  const stack = [];

  str.map((el) => {
    if (el == "(") {
      stack.push(el)
    } else if (el == ")") {
      const top = stack[stack.length - 1]
      if (top == "(") stack.pop();
      else stack.push(el)
    }
  })

  if (stack.length >= 1) answer += "NO" + "\n";
  else answer += "YES" + "\n"
  line++
}

console.log(answer)