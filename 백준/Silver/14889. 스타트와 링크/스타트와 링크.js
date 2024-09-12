const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0].trim());
const s = input.slice(1).map(line => line.trim().split(" ").map(Number));

let minDiff = Infinity; // 최소 차이 초기화
const visited = Array(n).fill(false); // 방문 여부를 저장하는 배열

function calculateDifference() {
  const teamA = [];
  const teamB = [];

  for (let i = 0; i < n; i++) {
    if (visited[i]) teamA.push(i);
    else teamB.push(i);
  }

  let teamAScore = 0;
  let teamBScore = 0;

  // 팀 A의 능력치 계산
  for (let i = 0; i < teamA.length; i++) {
    for (let j = 0; j < teamA.length; j++) {
      if (i !== j) {
        teamAScore += s[teamA[i]][teamA[j]];
      }
    }
  }

  // 팀 B의 능력치 계산
  for (let i = 0; i < teamB.length; i++) {
    for (let j = 0; j < teamB.length; j++) {
      if (i !== j) {
        teamBScore += s[teamB[i]][teamB[j]];
      }
    }
  }

  // 두 팀의 능력치 차이 계산 및 최소값 갱신
  const diff = Math.abs(teamAScore - teamBScore);
  minDiff = Math.min(minDiff, diff);
}

function backtrack(depth, start) {
  if (depth === n / 2) {
    calculateDifference(); // 팀이 나뉘었을 때 차이 계산
    return;
  }

  for (let i = start; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true; // 현재 인원을 팀 A에 포함
      backtrack(depth + 1, i + 1); // 재귀 호출로 다음 사람 선택
      visited[i] = false; // 백트래킹: 선택 해제
    }
  }
}

// 백트래킹 시작
backtrack(0, 0);

// 결과 출력
console.log(minDiff);