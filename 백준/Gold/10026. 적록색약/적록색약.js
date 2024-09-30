const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let arr = Array.from({length: n}, () => new Array(n));
let visited = Array.from({length: n}, () => new Array(n).fill(false));
let result1 = 0;
let result2 = 0;

// 2차원 배열로 데이터 저장
for (let i = 1; i <= n; i++) {
  let line = input[i];
  for (let j = 0; j < n; j++) {
    arr[i - 1][j] = line[j];
  }
}

// 일반인 기준 탐색
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result1++;
  }
}

// 적록색약 기준 탐색을 위해 방문 배열 초기화
visited = Array.from({length: n}, () => new Array(n).fill(false));

// R을 G로 바꿔서 적록색약 상황에 맞게 처리
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] == "R") arr[i][j] = "G";
  }
}

// 적록색약 기준 탐색
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result2++;
  }
}

console.log(result1 + " " + result2);

function dfs(curX, curY) {
  if (!visited[curX][curY]) {
    visited[curX][curY] = true;
    for (let [mx, my] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      let nx = curX + mx;
      let ny = curY + my;
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (arr[curX][curY] == arr[nx][ny]) {
          dfs(nx, ny);
        }
      }
    }
    return true;
  }
  return false;
}