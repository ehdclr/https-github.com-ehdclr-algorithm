const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const n = parseInt(input[0]);
const towers = input[1].split(" ").map(Number);

const stack = []
const result = new Array(n).fill(0)

for (let i = 0; i < n; i++) {
  // 현재 탑보다 낮은 탑들을 스택에서 제거
  while (stack.length > 0 && stack[stack.length - 1][1] < towers[i]) {
    stack.pop();
  }

  // 스택이 비어있지 않으면 현재 탑보다 높은 탑이 있음
  if (stack.length > 0) {
    result[i] = stack[stack.length - 1][0] + 1; // 1-based 인덱스
  }

  // 현재 탑을 스택에 추가
  stack.push([i, towers[i]]);
}

console.log(result.join(" "));