const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//a층의 b호에 살려면 a-1층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와야함

// 비어있는 집 없음

//k층 n호에는 몇명 사는지

let tc = Number(input[0]);

let line = 1;

while (tc--) {
  let k = Number(input[line++]); // k층 n 호 각층의 1호부터 i명있음 k-1층 1호부터 n호까지 합
  let n = Number(input[line++]);

  let arr = []; //이전 층을 기억할 부분
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  } // 0층 초기화

  for (let i = 1; i <= k; i++) {
    let tmp = []
    //한번 돌때마다 arr 변형
    let result = arr.reduce((acc, cur) => {
      if (acc !== 0) {
        tmp.push(acc);
      }
      return acc + cur
    }, 0);
    tmp.push(result)
    arr = tmp;
  }

  console.log(arr[n - 1])
}
