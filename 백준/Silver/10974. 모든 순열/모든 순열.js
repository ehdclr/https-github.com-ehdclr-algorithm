const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let visited = new Array(n + 1).fill(false);
let selected = []; //선택된 숫자

let answer = "";

function dfs(arr, depth) {
  if (depth == n) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop(i);
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
