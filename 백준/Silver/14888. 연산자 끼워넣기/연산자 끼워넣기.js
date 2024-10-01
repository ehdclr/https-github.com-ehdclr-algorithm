const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 세 번째 줄의 숫자는 각각 +, -, *, /의 개수
const n = Number(input[0]);
let arr1 = input[1].split(" ").map(Number); // 숫자 배열
let arr2 = input[2].split(" ").map(Number); // 연산자 개수 배열

let maxValue = -1e9;
let minValue = 1e9;

dfs(1, arr1[0]); // 첫 번째 숫자로 초기화
console.log(maxValue + "\n" + minValue);

function dfs(depth, currentResult) {
  if (depth === n) {
    // 최종 결과 계산 후 최대/최소 갱신
    maxValue = Math.max(currentResult, maxValue);
    minValue = Math.min(currentResult, minValue);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (arr2[i] > 0) {
      arr2[i]--; // 연산자 사용

      if (i === 0) {
        dfs(depth + 1, currentResult + arr1[depth]); // 덧셈
      } else if (i === 1) {
        dfs(depth + 1, currentResult - arr1[depth]); // 뺄셈
      } else if (i === 2) {
        dfs(depth + 1, currentResult * arr1[depth]); // 곱셈
      } else if (i === 3) {
        // 나눗셈: 정수 나눗셈 처리 (음수일 경우에 대한 처리 포함)
        dfs(depth + 1, currentResult < 0 ? -Math.floor(-currentResult / arr1[depth]) : Math.floor(currentResult / arr1[depth]));
      }

      arr2[i]++; // 연산자 복구
    }
  }
}