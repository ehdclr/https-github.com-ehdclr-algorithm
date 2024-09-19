const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let arr = [];
for (let i = 0; i <= n; i++) arr.push([0]);
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  for (let j = 0; j < line.length; j++) arr[i].push(line[j]);
}

let visited = new Array(11).fill(false);
let selected = [];

let minValue = Infinity;

function dfs(depth) {
  if (depth == n - 1) {
    let totalValue = 0;
    let cur = 1; //현재 
    for(let x of selected){
        if(arr[cur][x] == 0) return;
        totalValue += arr[cur][x] ;
        cur = x;
    }
    if(arr[cur][1] ==0) return;
    totalValue += arr[cur][1];
    minValue = Math.min(minValue,totalValue);
    return;
  }

  for (let i = 2; i <= n; i++) {
    if (visited[i]) continue;
    selected.push(i); // 현재 행에서 방문한 열
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(minValue);