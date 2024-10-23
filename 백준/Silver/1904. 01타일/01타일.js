const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//0과 1이 쓰여있는 낱장의 타일들

// 0은 무조건 00을 붙이고 2개씩

//1은 하나 낱장

let n = Number(input[0]);

//2진 수열 개수를 15746으로 나눈 나머지를 출력

//1 000 000 개  nlogn 시간 복잡도 까지 가능하다.

// n 1 ->1
// n 2 -> 11 00 2개
// n 3 -> 100 001 111 3개
// n 4 -> 0000 1100 1001 0011 1111 5개
// n 5 -> 00001 00100 10000 00111 10011 11001 11100 11111 8개

let d = new Array(1000001).fill(0);
d[0] = 0;
d[1] = 1;
d[2] = 2;

for (let i = 3; i <= n; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 15746;
}

console.log(d[n]);
