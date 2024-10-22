const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let result = [];
for (let i = 1; i <= n; i++) {
  result.push(Number(input[i]));
}

let answer = ""; // 결과를 저장할 문자열
let stack = [];  // 스택을 사용하여 연산을 수행
let curIndex = 0; // 현재 비교할 result 배열의 인덱스

for (let j = 1; j <= n; j++) {
  // 숫자를 스택에 push
  stack.push(j);
  answer += "+" + "\n";

  // 스택의 top이 result[curIndex]와 같으면 pop 반복
  while (stack.length > 0 && stack[stack.length - 1] === result[curIndex]) {
    stack.pop();
    answer += "-" + "\n";
    curIndex++;
  }
}

// 결과가 올바른지 확인
if (curIndex === n) {
  console.log(answer);
} else {
  console.log("NO");
}