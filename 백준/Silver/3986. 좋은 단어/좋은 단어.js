const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//교차만 안하면됨 그렇다면 stack 에 다 담아놓고 이전거와 바로 비교하면됨

const N = Number(input[0])

let count = 0;

// 100인풋은 100이고 범위는 100,000 100 x 100,000 루프니까 1초 딱 됨
// O( N x M) 시간 복잡도를 가진다고 보면된다.
for (let i = 1; i <= N; i++) {
  const stack = [];
  let str = input[i].split("")

  for (let char of str) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  if (stack.length === 0) count++;
}

console.log(count)