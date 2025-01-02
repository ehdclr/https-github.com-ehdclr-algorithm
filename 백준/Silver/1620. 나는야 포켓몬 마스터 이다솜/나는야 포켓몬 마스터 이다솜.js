const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

// 입력 처리
const [n, m] = input[0].split(" ").map(Number);

// 포켓몬 이름과 인덱스를 매핑할 HashMap 생성
const nameToIndex = new Map();
const indexToName = new Array(n + 1);

// 포켓몬 저장
for (let i = 1; i <= n; i++) {
  const name = input[i];
  nameToIndex.set(name, i); // 문자열 → 인덱스 매핑
  indexToName[i] = name;   // 인덱스 → 문자열 매핑
}

let answer = "";

// 쿼리 처리
for (let i = n + 1; i < n + 1 + m; i++) {
  const query = input[i].trim();

  // 숫자 쿼리 처리
  if (!isNaN(query)) {
    answer += indexToName[Number(query)] + "\n";
  } 
  // 문자열 쿼리 처리
  else {
    answer += nameToIndex.get(query) + "\n";
  }
}

console.log(answer);