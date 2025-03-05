//2 * N 크기의 직사각형을 1 X 2 2 X 1 타일로 채우는 방법의 수를 구해야함

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

//dp로 푸는거 같은데

//현재 가로로세울지 세로로 세울지 시작부터 분할 정복 
let d = [];
d[0] = 1;
d[1] = 2;

for(let i = 2; i < n ;i++){
    d[i] = (d[i-1] + d[i-2]) % 10007
}

console.log(d[n-1])