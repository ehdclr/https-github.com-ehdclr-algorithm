const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);

//배열 부분이 나오면 , 투포인터나 그런식으로 풀거나 다른 방법이 있다면 dp 밖에 없음

let dp = new Array(n).fill(1);

// 맨처음은 가장 작은 숫자 넣기 
// 모든 원소는 자기 자신만 가지니까
for(let i = 0 ; i < n ; i++){
  for(let j = 0 ; j < i ; j++){
      if(a[j] < a[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
  }
}

console.log(Math.max(...dp))
