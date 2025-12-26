const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let dist = new Array(100001).fill(Infinity);

let deque = [];
deque.push([n, 0]);
dist[n] = 0;

while (deque.length > 0) {
  let [cur, cnt] = deque.shift();

  if (cur === k) {
    console.log(cnt);
    break;
  }

  // 이미 더 빠른 경로로 방문했으면 스킵
  if (cnt > dist[cur]) continue;

  // 순간이동 (0초) - 덱의 앞에 추가
  let teleport = cur * 2;
  if (teleport <= 100000 && dist[teleport] > cnt) {
    dist[teleport] = cnt;
    deque.unshift([teleport, cnt]);  // 앞에 추가!
  }

  // 걷기 (1초) - 덱의 뒤에 추가
  for (let nxt of [cur + 1, cur - 1]) {
    if (nxt >= 0 && nxt <= 100000 && dist[nxt] > cnt + 1) {
      dist[nxt] = cnt + 1;
      deque.push([nxt, cnt + 1]);  // 뒤에 추가!
    }
  }
}