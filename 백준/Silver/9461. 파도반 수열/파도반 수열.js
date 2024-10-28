const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//첫 정삼각형의 변의 길이는 1

//p 1 -> 1 1 1 2 2 3 4 5 7

let t = Number(input[0]);

let d = new Array(101).fill(0);
d[1] = 1;
d[2] = 1;
d[3] = 1;

// n > =4

for (let i = 4; i <= 101; i++) {
  d[i] = d[i - 2] + d[i - 3];
}

for (let i = 1; i <= t; i++) {
  let n = Number(input[i]);
  console.log(d[n])
}
