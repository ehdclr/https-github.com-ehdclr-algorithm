const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i); // 숫자

let visited = new Array(n + 1).fill(false);
let selected = []; //선택 당한, 배열 넣기

let answer = "";

function dfs(arr, depth) {
  if (depth == m) {
    let result = [];
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
