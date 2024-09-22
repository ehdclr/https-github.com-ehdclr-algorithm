const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [r, c] = input[0].split(" ").map(Number);

// 알파벳 배열을 받아오는 부분
let alpha = Array.from(Array(r), () => new Array(c));
for (let i = 1; i <= r; i++) {
  let line = input[i].split("");
  for (let j = 0; j < c; j++) {
    alpha[i - 1][j] = line[j];
  }
}

let visited = new Set(); // 방문한 알파벳을 저장하는 Set
let maxCount = 0;  // 최대 이동할 수 있는 거리
let move = [[-1, 0], [1, 0], [0, -1], [0, 1]];  // 상하좌우 이동 가능

function dfs(curX, curY, count) {
    maxCount = Math.max(maxCount, count);  // 최대 경로 길이 업데이트
    for (let [x, y] of move) {
        let nextX = curX + x;
        let nextY = curY + y;
        if (nextX < 0 || nextX >= r || nextY < 0 || nextY >= c) continue;  // 좌표 경계 체크
        if (!visited.has(alpha[nextX][nextY])) {  // 방문하지 않은 알파벳일 때만 이동
            visited.add(alpha[nextX][nextY]);  // 알파벳 방문 체크
            dfs(nextX, nextY, count + 1);  // 다음 좌표로 DFS
            visited.delete(alpha[nextX][nextY]);  // 백트래킹
        }
    }
}

// 시작점 설정
visited.add(alpha[0][0]);
dfs(0, 0, 1);  // 시작 좌표에서 DFS 시작, 카운트는 1부터

console.log(maxCount);