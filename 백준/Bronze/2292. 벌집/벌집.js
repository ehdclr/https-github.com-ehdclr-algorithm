const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 첫방 자체는 count 1임 

// O(N)밖에 안됨

//1 6 12 18 24 30 

// 1 , 2~7, 8 ~ 19 , 20 ~ 
let N = Number(input[0]);

// 그렇담 해당 범위에 들어갈 때 [ start, end]사이에만 있으면되는거잖아

let end = 1;
let count = 1;
//새로운 end는 보다 밑이면, 됨

let ans = 1
while (end < N) {
  //종료조건은 end를 계속 갱신하다가. N 보다 end가 이상일때 마치면됨
  end = end + count * 6
  //처음은 1 + 6 * 1
  //두번째는 7 + 12 19
  count++
}

console.log(count)

