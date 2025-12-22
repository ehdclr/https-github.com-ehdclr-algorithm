const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = Array.from({ length: n + 1 }, () => [])

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
}

let visited = new Array(n + 1).fill(false);
let q = [];
let headIdx = 0;
let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    //dfs 혹은 bfs
    q.push(i);
    visited[i] = true;
    while (headIdx < q.length) {
      let cur = q[headIdx++];
      for (let nxt of arr[cur]) {
        if (!visited[nxt]) {
          visited[nxt] = true;
          q.push(nxt);
        }
      }
    }
    cnt++;
  }
}

console.log(cnt)

