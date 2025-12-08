const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//마지막 숫자는 isbn의 정확성 여부를 점검 가능 
// 각 가중치를 곱한걸 모두 더하고 10으로 나눈 나머지가 0이 되도록 만드는 숫자 m을 씀
let s = input[0]
let idx = 0
let sum = 0

for (let i = 0; i < s.length - 1; i++) {
  if (s[i] === '*') idx = i;
  else {
    // *이 아닐 때,
    //짝수 일때만 * 1
    //홀수 인덱스일 때 *3
    if (i % 2 === 0) {
      sum += 1 * Number(s[i])
    } else {
      sum += 3 * Number(s[i])
    }
  }
}
let last = Number(s[s.length - 1]); //마지막 숫자
let result = -1;
for (let i = 0; i < 10; i++) {
  let tempSum = sum;

  if (idx % 2 === 0) {
    tempSum += i * 1;
  } else {
    tempSum += i * 3;
  }

  if ((tempSum + last) % 10 === 0) {
    result = i;
    break;
  }
}

console.log(result);