const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

// 1 x : 정수 x를 스택에 넣ㄹ는다.
// 2 top 빼고 빼고 출력 , 없으면 - 1
// 3 스택에 들어잇는 정수의 개수 출력
// 4 스택이 비어있으면 1 아니면 0
// 5 스택에 정수가 있다면

const N = +input[0];

let stack = [];
let answer = ""

for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ");
  let cmd = +line[0]

  if (cmd == 1) {
    let X = +line[1];
    stack.push(X);
  } else if (cmd == 2) {
    if (stack.length == 0) answer += "-1" + "\n"
    else {
      let result = stack.splice(stack.length - 1);
      answer += result.join("\n") + "\n";
    }
  } else if (cmd == 3) {
    answer += stack.length + "\n"
  } else if (cmd == 4) {
    if (stack.length == 0) answer += 1 + "\n"
    else answer += 0 + "\n"
  } else {
    if (stack.length == 0) answer += "-1" + "\n";
    else answer += stack[stack.length - 1] + "\n"
  }
}

console.log(answer)