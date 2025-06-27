const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = input[0];
N = N.replace(/9/g, '6'); // 모든 9를 6으로 치환

let MAX_COUNT = 0;
let mp = new Map();

// 각 문자 개수 세기 (올바른 초기화)
for (let char of N) {
  mp.set(char, (mp.get(char) || 0) + 1); // 0에서 시작!
}

// 최대 세트 수 계산
for (let [char, count] of mp) {
  if (char == '6') {
    MAX_COUNT = Math.max(MAX_COUNT, Math.floor((count + 1) / 2)); // 올바른 괄호!
  } else {
    MAX_COUNT = Math.max(MAX_COUNT, count);
  }
}

console.log(MAX_COUNT);