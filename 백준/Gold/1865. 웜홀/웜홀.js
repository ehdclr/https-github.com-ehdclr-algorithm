const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);
let line = 1;

while (t--) {
  const [n, m, w] = input[line++].split(" ").map(Number);
  const edges = [];

  for (let i = line; i < line + m; i++) {
    const [s, e, t] = input[i].split(' ').map(Number);
    edges.push([s, e, t]);
    edges.push([e, s, t]);  // 양방향
  }

  for (let i = line + m; i < line + m + w; i++) {
    const [s, e, t] = input[i].split(' ').map(Number);
    edges.push([s, e, -t]);  // 단방향, 음수
  }

  line += m + w;

  const dist = new Array(n + 1).fill(0);

  let hasNegCycle = false;

  for (let i = 0; i < n; i++) {
    for (const [s, e, cost] of edges) {
      if (dist[s] + cost < dist[e]) {
        dist[e] = dist[s] + cost;
        if (i === n - 1) hasNegCycle = true;
      }
    }
  }

  console.log(hasNegCycle ? "YES" : "NO");
}