const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//조합으로 푸는 문제임

let line = 0;
let answer = "";
while (Number(input[line][0])) {
  let arr = input[line].split(" ").map(Number);
  let k = arr[0];
  let nums = arr.slice(1, k + 1);

  let visited = new Array(50).fill(false);
  let selected = [];
  dfs(0, 0,visited, selected, nums);
  console.log(answer);
  answer = "";
  line += 1;
}

function dfs(depth, start, visited, selected, arr) {
  if (depth == 6) {
    let result = [];
    for (let x of selected) result.push(x);
    result.sort((a, b) => a - b);
    for (let y of result) answer += y + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[arr[i]]) continue;
    selected.push(arr[i]);
    visited[arr[i]] = true;
    dfs(depth + 1, i + 1, visited, selected, arr);
    selected.pop();
    visited[arr[i]] = false;
  }
}
