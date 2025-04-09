const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const graph = input.slice(1).map(line => line.split(" ").map(Number));

// 플로이드-워셜 알고리즘
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][k] && graph[k][j]) {
        graph[i][j] = 1;
      }
    }
  }
}

console.log(graph.map(row => row.join(" ")).join("\n"));