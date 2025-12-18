const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let p = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  p[i] = i;
}

function find(u) {
  if (p[u] !== u) {
    p[u] = find(p[u]);
  }
  return p[u];
}

function union(x, y) {
  let r1 = find(x);
  let r2 = find(y);

  if (r1 !== r2) {
    p[r1] = r2;
  }
}

let answer = '';
for (let i = 1; i <= m; i++) {
  const [cmd, a, b] = input[i].split(' ').map(Number);

  if (cmd === 0) {
    union(a, b);
  } else {
    if (find(a) === find(b)) {
      answer += "YES\n";
    } else {
      answer += "NO\n";
    }
  }
}

console.log(answer.trim());