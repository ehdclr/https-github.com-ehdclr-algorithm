const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 인접 리스트로 표현
const n = Number(input[0]);  // 컴퓨터 수
const k = Number(input[1]);  // 연결 수

// 연결 리스트(인접 리스트) 초기화
const links = Array.from({ length: n + 1 }, () => []);

// 연결 정보 입력
for (let i = 2; i < 2 + k; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    links[a].push(b);
    links[b].push(a);
}

let virus = new Array(n + 1).fill(false); // 방문 여부 확인 배열
let cnt = 0;  // 감염된 컴퓨터 수

// DFS 함수 정의
function dfs(i) {
    virus[i] = true; // 현재 노드를 방문 처리
    cnt++;  // 방문한 노드 카운트

    // 현재 노드에 연결된 노드들 탐색
    for (let x of links[i]) {
        if (!virus[x]) {
            dfs(x);  // 방문하지 않은 노드에 대해 DFS 재귀 호출
        }
    }
}

// 1번 컴퓨터부터 시작
dfs(1);

console.log(cnt - 1);  // 1번 컴퓨터 제외한 감염된 컴퓨터 수 출력