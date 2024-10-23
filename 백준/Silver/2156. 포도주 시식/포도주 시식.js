const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//포도주 잔을 선택하면 포도주는 다 마시고 원래 위치


//연속으로 놓여진 3잔은 모두 마실 수 없다

//6 10 13 9 8 1 
//1 2  3  4 5 6

let n = Number(input[0]);
let arr = []
for(let i = 1; i <= n ;i++){
  arr.push(Number(input[i]));
}

let dp = new Array(n).fill(0);
dp[0] = arr[0]; //6잔 중 1번째 잔까지 있을때
dp[1] = arr[0]+ arr[1]; //6 잔중 2번째 잔까지 있을때
dp[2] = Math.max(arr[0]+arr[1], arr[0] + arr[2], arr[1] + arr[2]); //6잔중 3번째 잔까지 있을때

for(let i = 3 ; i < n ;i++){
  dp[i] = dp[i-1] //i번째 마시기
  dp[i] = Math.max(dp[i], arr[i] + dp[i-2]) //i번째 마시기
  dp[i] = Math.max(dp[i], arr[i] + arr[i-1]+ dp[i-3]); //i번째 마시고, i-1번째 마시고 i-3번째때 안마셨다할대
}

console.log(dp[n-1]);