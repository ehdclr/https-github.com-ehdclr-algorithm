const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 테스트 케이스 수
let t = Number(input[0]);

let line = 1;
let answer = "";

while (t--) {
  // 명령어, 배열 크기 및 배열 입력 처리
  let p = input[line].split(""); // 명령어 리스트
  let n = Number(input[line + 1]); // 배열 크기
  let arr = input[line + 2].trim(); // 배열 입력

  // 빈 배열 처리
  arr = arr === "[]" ? [] : arr.slice(1, -1).split(",").map(Number);

  let isReversed = false; // 뒤집힌 상태 추적
  let isError = false; // 에러 상태 추적
  let start = 0, end = arr.length;

  for (let cmd of p) {
    if (cmd === "R") {
      isReversed = !isReversed; // 뒤집기 상태 전환
    } else if (cmd === "D") {
      if (start >= end) { // 배열이 비어 있으면 에러
        isError = true;
        break;
      }
      // 앞 또는 뒤에서 제거
      if (isReversed) {
        end--; // 뒤에서 제거
      } else {
        start++; // 앞에서 제거
      }
    }
  }

  if (isError) {
    answer += "error\n";
  } else {
    let result = arr.slice(start, end); // 필요한 부분만 추출
    if (isReversed) result.reverse(); // 최종 결과만 뒤집기
    answer += `[${result.join(",")}]\n`;
  }

  line += 3; // 다음 테스트 케이스로 이동
}

console.log(answer);