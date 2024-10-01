const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = Array.from({ length: n }, () => []);

for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  for (let j = 0; j < m; j++) arr[i - 1].push(line[j]);
}

// 0은 빈칸, 1은 벽, 2는 바이러스
// 벽 3개를 세우고 안전 영역이 최대가 되어야 함

let possible = []; // 벽을 세울 수 있는 공간들

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] == 0) possible.push([i, j]);
  }
}

let visited = new Array(possible.length).fill(false);
let answer = 0;

combination(0, [], arr);
console.log(answer);

function combination(depth, result, graph) {
  if (depth == 3) {
    // 벽을 3개 골랐을 때 바이러스를 퍼뜨리고 안전 영역 계산
    let copyGraph = graph.map(row => [...row]); // 깊은 복사로 graph의 변경을 방지
    let cnt = 0;

    // 선택한 벽을 세움
    for (let [x, y] of result) {
      copyGraph[x][y] = 1;
    }

    // 바이러스를 퍼뜨림
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (copyGraph[i][j] == 2) dfs(i, j, copyGraph);
      }
    }

    // 안전 영역(0인 영역) 개수 계산
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (copyGraph[i][j] == 0) cnt++;
      }
    }

    answer = Math.max(answer, cnt);
    return; // 벽 3개를 다 골랐으므로 종료
  }

  for (let i = 0; i < possible.length; i++) {
    if (visited[i]) continue;
    result.push(possible[i]);
    visited[i] = true;
    combination(depth + 1, result, graph);
    result.pop();
    visited[i] = false;
  }
}

function dfs(curX, curY, arr) {
  arr[curX][curY] = 2; // 바이러스를 퍼뜨림
  for (let [mx, my] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]) {
    let nx = curX + mx;
    let ny = curY + my;
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (arr[nx][ny] == 0) {
      dfs(nx, ny, arr);
    }
  }
}