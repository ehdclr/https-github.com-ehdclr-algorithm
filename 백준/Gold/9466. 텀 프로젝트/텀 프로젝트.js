const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//순회하면 한 팀임
//순회 하는지 확인해야함

let tc = Number(input[0]);
let line = 1;

while (tc--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(" ").map(Number)];
  let visisted = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  for (let x = 1; x <= n; x++) {
    if (!visisted[x]) dfs(x, graph, visisted, finished, result);
  }

  line += 2;
  console.log(n - result.length);
}

//TODO 순회 하려면 다음 것이 이젠 것과 같아야함
function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}
