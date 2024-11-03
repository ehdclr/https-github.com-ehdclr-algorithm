const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//n개의 실수가 있을 때, 한 개 이상의 연속된 수들의 곱이 최대가 되는 부분 

// 1~ n개까지 골라서 테이블 만들면됨

//1일 때는 1.4가 되고
//2일때는 소수점이하 셋째자리까지 출력

const n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n ;i++){
    arr.push(Number(input[i]));
}


for(let i = 1 ; i <n ;i++){
    arr[i] = Math.max(arr[i],arr[i] * arr[i-1])
}

console.log(Math.max(...arr).toFixed(3));