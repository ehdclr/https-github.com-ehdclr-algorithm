const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);

let line = 1;
let cnt;
let arr;
let m, n, k;

while (t--) {
  [m, n, k] = input[line].split(" ").map(Number); // 가로 m, 세로 n, 배추 위치 k
  arr = Array.from({ length: n }, () => new Array(m).fill(0)); // n행 m열 배열 생성
  cnt = 0;

  // 배추 위치 입력
  for (let i = 1; i <= k; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    arr[y][x] = 1; // 배추가 있는 위치를 1로 표시 (y, x로 처리)
  }

  // 모든 좌표에서 DFS를 실행
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) { // 배추가 있는 곳이면
        dfs(i, j); // DFS 시작
        cnt++; // 연결된 배추 구역 하나 처리했으므로 카운트 증가  해당구역마다 dfs로 돌아서 처리한다는 것 
      }
    }
  }

  console.log(cnt); // 각 테스트 케이스 결과 출력

  line += k + 1; // 다음 테스트 케이스로 이동
}

function dfs(curX, curY) {
  // 현재 위치 방문 처리
  arr[curX][curY] = 0;

  // 상, 하, 좌, 우로 이동하며 연결된 배추 탐색
  for (let [mx, my] of [
    [-1, 0],  // 상
    [1, 0],   // 하
    [0, -1],  // 좌
    [0, 1],   // 우
  ]) {
    let [nx, ny] = [curX + mx, curY + my];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1) {
      // 배열 범위 내에 있고, 배추가 있으면 DFS 재귀 호출
      dfs(nx, ny);
    }
  }
}