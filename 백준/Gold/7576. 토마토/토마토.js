const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [m, n] = input[0].split(' ').map(Number);


let queue = [];
let allTomatoesCount = 0;
let ripedTomatoesCount = 0;

let box = []
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number);
  box.push(row);
}

for (let i = 0; i < n; i++) { // 행 
  for (let j = 0; j < m; j++) { //열
    if (box[i][j] != -1) {
      if (box[i][j] == 1) {
        queue.push([i, j, 0]); // y좌표, x좌표 
        ripedTomatoesCount++;
      }
      allTomatoesCount++;
    }
  }
}

let index = 0;
let days = 0;

while (index < queue.length) {
  let [x, y, count] = queue[index++]; //행 열


  days = Math.max(days, count);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (box[nx][ny] == 0) {
        box[nx][ny] = 1
        ripedTomatoesCount += 1
        queue.push([nx, ny, count + 1])
      }
    }
  }
}



if (allTomatoesCount == ripedTomatoesCount) {
  console.log(days)
} else {
  console.log(-1)
}


