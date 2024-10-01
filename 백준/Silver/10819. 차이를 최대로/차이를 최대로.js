const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let visited = new Array(10).fill(false);


let answer = -1e9;
dfs(0,[]);
console.log(answer);

//순열로 먼저 정하고

function getScore(n, temp) {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(temp[i] - temp[i + 1]);
  }

  return sum;
}

function dfs(depth, result) {
  if (depth == n) {
    //최종적으로 담은 result
    
    answer = Math.max(getScore(n, result), answer);
  }

  for (let i = 0; i < n; i++) {
    if(visited[i]) continue; 
    result.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1,  result);
    result.pop(arr[i]);
    visited[i] = false
  }
}
