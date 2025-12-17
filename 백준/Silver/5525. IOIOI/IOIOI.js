const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

// n+1개의 i와 N개의 o로 교대로 나옴 


// 
// 문자열 S와 정수 N 이 주어졌을때 

const n = Number(input[0]);
const m = Number(input[1]);

const s = input[2];

// 시작지점이 I여야함 
// 여기서 슬라이딩 윈도우로 해야할거같음 

// O(n)정도만 되겠네 

let dp = ['IOI'];

for (let i = 1; i < n; i++) {
  dp[i] = dp[i - 1] + 'OI'
}

//인덱스가 짝수일때 I 홀수 일때 O이고 palindrome이면 됨
function isIOI(s) {
  return s === dp[n - 1];
}

let start = 0;
let cnt = 0
//I를 만나면 , 2+더해보기 
while (start < m) {
  if (s[start] === "I") {
    let current = s.substring(start, start + dp[n - 1].length)
    if (isIOI(current)) {
      cnt += 1
      start += 2;
      continue;
    }
  }
  start++;
}

console.log(cnt)