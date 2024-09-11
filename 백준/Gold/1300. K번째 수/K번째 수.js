const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const k = Number(input[1]);

//B[k] 보다 작거나 같은걸 7개로 하면됨

let start = 1;
let end = 1e9;

let result =0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  // 각 행을 1 2 3
  // 1 2 3
  // 1 2 3 으로 맞추면 비교하기가 쉽다. mid 값도 그래서 행만큼 나누면됨
  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }

  if(total >= k) {
    result = mid;
    end = mid -1;
  }
  else {
    start = mid+1
  }
}

console.log(result);