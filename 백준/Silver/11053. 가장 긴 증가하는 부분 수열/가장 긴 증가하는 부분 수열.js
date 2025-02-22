const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

// const n = Number(input[0]);
// const a = input[1].split(" ").map(Number);

// //배열 부분이 나오면 , 투포인터나 그런식으로 풀거나 다른 방법이 있다면 dp 밖에 없음

// // 모든 원소는 자기 자신만 가지니까
// let dp = new Array(n).fill(1); 


// // i는 현재 위치 j는 i보다 왼쪽에서 작은것들 탐지하기 j가 움직일때마다 이전 위치의 자기보다 작은 것들을 찾아내니가
// // i를 갱신해 줄 수 있다. 
// for(let i = 0 ; i < n ; i++){
//   for(let j = 0 ; j < i ; j++){
//       if(a[j] < a[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//   }
// }

// console.log(Math.max(...dp))

// //시간 복잡도는 O(N^2) 공간복잡도는 O(N)

// // i = 0: dp[0] = 1  (10 하나만 선택 가능)
// // i = 1: dp[1] = 2  (10 -> 20)
// // i = 2: dp[2] = 1  (10만 가능)
// // i = 3: dp[3] = 3  (10 -> 20 -> 30)
// // i = 4: dp[4] = 2  (10 -> 20)
// // i = 5: dp[5] = 4  (10 -> 20 -> 30 -> 50)

//바이너리 서치 방법
//O(NLOGN)

const n = Number(input[0])
const a = input[1].split(" ").map(Number);

const list = []

for(let i = 0 ; i < n ; i++){
  let start = 0 , end = list.length - 1;

  while(start <= end ){
    let mid = Math.floor((start + end )/2);
    if(list[mid] >= a[i]) end = mid - 1;
    else start = mid + 1
  }

  if( start < list.length ) list[start] = a[i];
  else list.push(a[i])
}

console.log(list.length)