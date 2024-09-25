const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = 1;
let line = 0;

let arr; // 인접 리스트
let visited;
let cnt;

while (true) {
  let [a, b] = input[line].split(" ").map(Number);

  // 입력 종료 처리
  if (a === 0 && b === 0) break;

  cnt = 0;
  visited = new Array(a + 1).fill(false);
  arr = Array.from({ length: a + 1 }, () => []);

  // 간선 정보 입력
  for (let i = 0; i < b; i++) {
    let [x, y] = input[line + i + 1].split(" ").map(Number);
    arr[x].push(y);
    arr[y].push(x); // 인접 리스트 구성
  }

  // 각 정점에 대해 트리 여부 확인
  for (let i = 1; i <= a; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) {
        cnt++; // 사이클이 없으면 트리
      }
    }
  }

  // 출력 처리
  if (cnt === 0) console.log(`Case ${testCase}: No trees.`);
  else if (cnt === 1) console.log(`Case ${testCase}: There is one tree.`);
  else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);

  // 다음 테스트 케이스로 이동
  line += b + 1;
  testCase++;
}

function isCycle(x, prev) {
  visited[x] = true;

  for (let y of arr[x]) {
    if (!visited[y]) {
      // 새 정점을 방문할 때 사이클 여부 확인
      if (isCycle(y, x)) return true; // 사이클 발견 시 true
    } else if (y !== prev) {
      // 이전 정점이 아닌데 이미 방문한 경우는 사이클
      return true;
    }
  }
  return false; // 사이클이 없으면 false
}