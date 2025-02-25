const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = "";

// 누적 합 배열 생성 (acc[0] = 0, acc[i]는 arr[0]부터 arr[i-1]까지의 합)
let acc = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  acc[i] = acc[i - 1] + arr[i - 1];
}

// 구간 합 계산
for (let line = 2; line < 2 + m; line++) {
  let [i, j] = input[line].split(" ").map(Number);
  answer += (acc[j] - acc[i - 1]) + "\n";
}

console.log(answer);