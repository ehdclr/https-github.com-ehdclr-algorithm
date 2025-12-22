const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");


// N x M 캠퍼스 크기 상하 좌우 이동 만날 수 있는 사람의 수 

const [n, m] = input[0].split(" ").map(Number);
const matrix = [];

for (let i = 1; i <= n; i++) {
  let line = input[i].split('');
  matrix.push(line);
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];


// O는 빈공간, x는 벽, I는 도연이 , P는 사람 
// 만날 수 있는 사람 아무도 못만나면 TT


let cnt = 0; //만난 사람수 
let q = []

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] === "I") {
      // 여기서 시작 
      q.push([i, j]);
      matrix[i][j] = '-'; //방문 처리 

      let headIdx = 0;

      while (headIdx < q.length) {
        let [curY, curX] = q[headIdx++];

        for (let i = 0; i < 4; i++) {
          let nx = curX + dx[i]
          let ny = curY + dy[i]
          if (nx < 0 || ny < 0 || nx >= m || ny >= n || matrix[ny][nx] === '-' || matrix[ny][nx] == 'X') continue;
          else {
            if (matrix[ny][nx] === 'P') cnt++;
            matrix[ny][nx] = '-';
            q.push([ny, nx]);
          }

        }
      }
    }
  }
}

if (cnt === 0) {
  console.log('TT')
} else {
  console.log(cnt)
}


