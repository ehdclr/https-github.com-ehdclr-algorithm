const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const matrix = [];

// 매트릭스 초기화
for (let i = 1; i <= R; i++) {
  let line = input[i].split("");
  matrix.push(line);
}

let jihunQ = [];
let fireQ = [];

// 초기 위치 설정
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (matrix[i][j] === "J") {
      jihunQ.push([i, j, 0]);
      matrix[i][j] = "."; // 지훈이 시작점을 빈 공간으로
    } else if (matrix[i][j] === "F") {
      fireQ.push([i, j]);
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  while (jihunQ.length > 0) {

    let fireSize = fireQ.length;
    for (let f = 0; f < fireSize; f++) {
      let [fX, fY] = fireQ.shift();

      for (let i = 0; i < 4; i++) {
        let nx = fX + dx[i];
        let ny = fY + dy[i];

        if (nx >= 0 && nx < R && ny >= 0 && ny < C && matrix[nx][ny] === ".") {
          matrix[nx][ny] = "F";
          fireQ.push([nx, ny]);
        }
      }
    }


    let jihunSize = jihunQ.length;
    for (let j = 0; j < jihunSize; j++) {
      let [jX, jY, time] = jihunQ.shift();


      if (jX === 0 || jX === R - 1 || jY === 0 || jY === C - 1) {
        return time + 1;
      }

      for (let i = 0; i < 4; i++) {
        let nx = jX + dx[i];
        let ny = jY + dy[i];

        if (nx >= 0 && nx < R && ny >= 0 && ny < C && matrix[nx][ny] === ".") {
          matrix[nx][ny] = "J";
          jihunQ.push([nx, ny, time + 1]);
        }
      }
    }
  }

  return -1; // 탈출 불가능
}

const result = bfs();
console.log(result !== -1 ? result : 'IMPOSSIBLE');