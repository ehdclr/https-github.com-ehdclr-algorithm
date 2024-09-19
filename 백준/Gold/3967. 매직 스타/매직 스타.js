const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let nums = [
  [0, 4],
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 2],
  [2, 6],
  [3, 1],
  [3, 3],
  [3, 5],
  [3, 7],
  [4, 4],
];
let lines = [
  [0, 2, 5, 7],
  [0, 3, 6, 10],
  [1, 2, 3, 4],
  [1, 5, 8, 11],
  [4, 6, 9, 11],
  [7, 8, 9, 10],
]; //숫자가 있는 nums좌표를 고른것

let result = [];
let blank = []; //비워진 자리 좌표
let visited = new Array(13).fill(false);
for (let i = 0; i < 5; i++) {
  let line = input[i].split("");
  result.push(line);
}

nums.forEach(([i, j]) => {
  if (result[i][j] == "x") {
    blank.push([i, j]);
  } else {
    let value = result[i][j].charCodeAt(0) - 64;
    visited[value] = true; //방문 처리
  }
});

//합이 26인지 확인

function isSumTS() {
  for (let line of lines) {
    let sum = 0;
    for (let x of line) {
      let [i, j] = nums[x];
      sum += result[i][j].charCodeAt(0) - 64;
    }
    if (sum != 26) return false;
  }
  return true;
}

function dfs(depth) {
  if (depth === blank.length) {
    if (isSumTS()) {
      return true;
    }
    return false;
  }

  for (let i = 1; i <= 12; i++) {
    if (visited[i]) continue;
    let [x, y] = blank[depth]; //
    result[x][y] = String.fromCharCode(i + 64);
    visited[i] = true;
    if (dfs(depth + 1)) return true;
    result[x][y] = "x";
    visited[i] = false;
  }
  return false;
}
if (dfs(0)) {
  for (let row of result) console.log(row.join(""));
}
