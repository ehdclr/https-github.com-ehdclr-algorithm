const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//몸무게 , 키  덩치 등수를 재기 

let n = Number(input[0]);
let rank = Array(n).fill(1)

let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number))

//먼저 몇등인지 모름 
for (let i = 0; i < arr.length; i++) {
  //현재 자기자신
  for (let j = 0; j < arr.length; j++) {
    //
    let cur = arr[i];
    let comp = arr[j]; //비교할 대상
    if (i == j) continue; //자기;자신은 비교할게 아님
    if (cur[0] < comp[0] && cur[1] < comp[1]) {
      //i가 지금 자기자신임 
      rank[i] = rank[i] + 1
    }
  }
}

console.log(...rank)