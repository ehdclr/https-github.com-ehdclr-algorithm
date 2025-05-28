const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let nums = [];

for (let i = 1; i <= n; i++) nums.push(i);
let visited = new Array(n).fill(false)

let answer = ""

function dt(depth, index, result) {
  if (depth == m) {
    for (let num of result) {
      answer += num + " "
    }
    answer += "\n"
    return;
  }

  for (let i = index; i < n; i++) {
    if (visited[i]) continue;
    result.push(nums[i]);
    visited[i] = true;
    dt(depth + 1, i + 1, result);
    result.pop();
    visited[i] = false
  }
}

dt(0, 0, []);
console.log(answer);