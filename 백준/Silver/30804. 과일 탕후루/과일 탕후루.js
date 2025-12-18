const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

//O(n^2)까지 가능한 문제 
//연속된 길이 -> 슬라이딩 윈도우 
const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

let max = 0
let q = [];
let headIdx = 0;
let count = new Map();

for (let i = 0; i < arr.length; i++) {
  q.push(arr[i]);
  count.set(arr[i], (count.get(arr[i]) || 0) + 1);

  while (count.size > 2) {
    let front = q[headIdx];
    count.set(front, count.get(front) - 1);
    if (count.get(front) === 0) {
      count.delete(front);
    }
    headIdx++;
  }

  max = Math.max(max, q.length - headIdx);
}

console.log(max)