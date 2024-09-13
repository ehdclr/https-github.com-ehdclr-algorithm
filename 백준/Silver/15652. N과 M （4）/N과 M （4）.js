const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

//중복으로 골라도 되지만, 깊이가 깊어지면, 이전 뎁스에서 고른것보다 같거나 커야함

let selected = [];
let answer =""

function dfs(depth, start) {
  if (depth == m) {
    for(let x of selected) answer += x + " "
    answer += "\n"
    return
  }

  for (let i = start; i <= n; i++) {
    selected.push(i);
    dfs(depth + 1, i);
    selected.pop();
  }
}

dfs(0,1)

console.log(answer)