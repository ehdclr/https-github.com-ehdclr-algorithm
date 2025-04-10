const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const INF = 1e9;
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

// 자기 자신은 거리 0
for (let i = 1; i <= n; i++) dist[i][i] = 0;

// 간선 정보 입력
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  dist[a][b] = 1;
  dist[b][a] = 1;
}

// 플로이드-워셜 알고리즘
for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (dist[i][j] > dist[i][k] + dist[k][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

// 케빈 베이컨 수 계산
let minSum = INF;
let person = 0;

for (let i = 1; i <= n; i++) {
  const sum = dist[i].slice(1).reduce((a, b) => a + b, 0);
  if (sum < minSum) {
    minSum = sum;
    person = i;
  }
}

console.log(person);