const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let visited = new Array(n + 1).fill(false);
let answer = "";

function bt(index, result) {
  if (index == m) {
    answer += result.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[arr[i]]) continue;
    result.push(arr[i]);
    visited[arr[i]] = true;
    bt(index + 1, result);
    result.pop();
    visited[arr[i]] = false;
  }
}
bt(0, []);

console.log(answer);
