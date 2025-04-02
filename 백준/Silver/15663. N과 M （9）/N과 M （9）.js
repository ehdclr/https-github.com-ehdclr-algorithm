const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

const [n, m] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number).sort((a, b) => a - b)

let result = [];
let visited = new Array(n);
let answer = ""


function bt(depth) {
  if (depth == m) {

    result.map((el) => answer += el + " ")
    answer += "\n"
    return
  }

  let used = new Set()

  for (let i = 0; i < n; i++) {
    if (visited[i] || used.has(nums[i])) continue;

    visited[i] = true;
    result.push(nums[i])
    used.add(nums[i]);

    bt(depth + 1)

    visited[i] = false;
    result.pop()
  }

}

bt(0)

console.log(answer)