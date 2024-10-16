const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

// 입력된 배열을 정렬하고 Set으로 중복 제거
arr.sort((a, b) => a - b);
const answer = new Set();
let selected = [];

function dfs(start, depth) {
  if (depth === m) {
    answer.add(selected.join(" "));
    return;
  }
  for (let i = start; i < n; i++) {
    selected.push(arr[i]);
    dfs(i, depth + 1); // 중복을 허용하므로 i부터 시작
    selected.pop();
  }
}

dfs(0, 0);
console.log([...answer].join("\n"));
