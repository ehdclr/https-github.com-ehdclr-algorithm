const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [0];

for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

//방향 그래프에서 순환을 말하는거같음

let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];
let answer = "";

for (let x = 1; x <= n; x++) {
  if (!visited[x]) dfs(x);
}

function dfs(cur) {
  visited[cur] = true;
  let nxt = arr[cur];

  if (!visited[nxt]) {
    dfs(nxt);
  } else if (!finished[nxt]) {
    //순환
    while (nxt != cur) {
      result.push(nxt);
      nxt = arr[nxt];
    }
    result.push(cur);
  }
  finished[cur] = true;
}

answer += result.length + "\n";
result.sort((a,b)=>a-b).map((el)=> answer += el +"\n");

console.log(answer);