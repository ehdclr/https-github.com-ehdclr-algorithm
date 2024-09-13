const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

//중복 되는 수열을 여러번 출력하면 안됨

let visited = new Array(n + 1).fill(false);
let selected = [];

let answer =""

function dfs(depth, start) {
  if (depth == m) {

    for(let x of selected) answer += x + " "
    answer +="\n"
    return;

  }

  for (let i = start; i <= n; i++) {
    if (visited[i]) continue; //이미 방문하면 빼기
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

//1 2 
//1 3
//1 4

//2 3
//2 4

//3

//4

//4 2 이면

//depth (0,1)
// 1 -> depth(1,2) -> 2  --> 4까지

//depth 0 4 -> depth 1 

dfs(0,1);

console.log(answer)