const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [m, n, h] = input[0].split(' ').map(Number);

let wholeBox = [];

let queue = [];
let totalTomatoes = 0;
let ripeTomatoes = 0;

let dx = [-1, 1, 0, 0, 0, 0];
let dy = [0, 0, -1, 1, 0, 0];
let dz = [0, 0, 0, 0, -1, 1];

for (let i = 0, index = 1; i < h; i++) {
  let layer = [];
  for (let j = 0; j < n; j++, index++) {
    let row = input[index].split(' ').map(Number);
    layer.push(row);
    for (let k = 0; k < m; k++) {
      if (row[k] === 1) {
        queue.push([i, j, k, 0]) // 높이 세로 가로 날짜
        ripeTomatoes++;
      }
      if (row[k] !== -1) {
        totalTomatoes++;
      }
    }
  }

  wholeBox.push(layer);
}


let maxDays = 0;
let index = 0; //queue 인덱스 

while (index < queue.length) {
  let [z, x, y, days] = queue[index++];
  maxDays = Math.max(maxDays, days);

  for (let i = 0; i < 6; i++) {
    let nz = z + dz[i];
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && nz >= 0 && nz < h) {
      if (wholeBox[nz][nx][ny] === 0) {
        wholeBox[nz][nx][ny] = 1;
        queue.push([nz, nx, ny, days + 1]);
        ripeTomatoes++;
      }
    }
  }

}

if (ripeTomatoes == totalTomatoes) {
  console.log(maxDays); //익은것과 익어야할 것이 같아지면 날짜 뽑기
} else {
  //아니라면 
  console.log(-1)
}