const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let M = Number(input[1])
let s = input[2];

let cnt = 0;
let answer = 0;

let start = 0;
while (start < M) {

  if (s.substring(start, start + 3) === "IOI") {
    cnt++
    start += 2;
    if (cnt === N) {
      cnt > 0 ? cnt-- : 0
      answer++;
    }
  } else {
    cnt = 0
    start++;
  }
}

console.log(answer)
