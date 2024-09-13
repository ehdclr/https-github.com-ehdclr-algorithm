const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const selected = [];

let answer = "";
function dfs(depth) {
  if (depth == m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
  }
}

dfs(0)
console.log(answer)