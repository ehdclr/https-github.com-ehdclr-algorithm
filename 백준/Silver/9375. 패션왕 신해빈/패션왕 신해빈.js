const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = Number(input[0]); // 테스트 케이스 개수
let line = 1;
let answer = "";

while (t--) {
  let n = Number(input[line]); // 의상의 개수
  let clothes = {};

  // 의상을 카테고리별로 저장
  for (let i = 1; i <= n; i++) {
    let [cloth, category] = input[line + i].split(" "); // 문자열을 공백 기준으로 나눔
    if (!clothes[category]) {
      clothes[category] = [];
    }
    clothes[category].push(cloth);
  }

  // 조합 계산 (각 카테고리별 (의상 개수 + 1) 곱하기)
  let result = 1;
  for (let key of Object.keys(clothes)) {
    result *= (clothes[key].length + 1);
  }

  result -= 1; // 모든 의상을 안 입는 경우 제외
  answer += result + "\n";

  line += n + 1; // 다음 테스트 케이스로 이동
}

console.log(answer);