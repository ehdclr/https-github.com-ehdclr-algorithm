const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//피보나치

//상향식 - > 반복문으로 초기항부터계산
//하향식 재귀함수로 부터 큰항을 구하기 위해 작은 항을 호출

//피보나치 0은 0
//피보나치 1은 1리턴

//테스트 케이스가 주어지고 n 은 0과 1이 얼마나 호출되는지

//그러면
// 0 , 1 , 0 + 1 , 1, 2= 0 +1 (0 1*2)
// 0 , 1 , 0 + 1 , 1, 0 1 , 1 0 1 ,

//0 과 1 이 출력 되는건
// [x,y] => x : 0 이 출력되는 횟수 , y: 출력되는 횟수로

//반복문으로 초기항부터 할 수 있지만,
//하향식으로 하기
let t = Number(input[0]);

// 0은 1 0 1 1 2 3 5 -> 맨앞은 피보나치
//재귀는 nlogn의 시간복잡도를 가짐

let d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;
d[2] = 1;
function fibo(x) {
  if (x == 0) {
    return 0;
  }
  if (d[x] != 0) {
    return d[x]; //이미 값이 있는 것들은 출력
  }
  if (x >= 2) {
    d[x] = fibo(x - 1) + fibo(x - 2);
    return d[x];
  }
}
let answer = "";

for (let i = 1; i <= t; i++) {
  let n = Number(input[i]); // 숫자
  //0은 현재 숫자의 fibo(n-2)이고
  //1은 현재 숫자의 fibo(n-1)을 호출해서 출력함
  if (n == 0) answer += d[1] + " " + "0" + "\n";
  if (n == 1) answer += "0" + " " + d[1] + "\n";
  else if (n >= 2) {
    answer += fibo(n - 1) + " " + fibo(n) + "\n";
  }
}

console.log(answer);
