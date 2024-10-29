const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 삼각형의 크기
const n = Number(input[0]);
let graph = Array.from({ length: n }, () => []);
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  graph[i - 1] = [...line];
}

//각 0번째 줄 0 인덱스
// 1번째 줄 0 1 2 인덱스 이런식으로 있음
//

//행에 대한 인덱스 - 1부터
for (let i = 1; i < n; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    //i 가 행 j 는 열
    if (j == 0) graph[i][j] += graph[i - 1][j];
    else if (j == graph[i].length - 1) graph[i][j] += graph[i - 1][j - 1];
    else {
      graph[i][j] = Math.max(
        graph[i][j] + graph[i - 1][j -1],
        graph[i][j] + graph[i - 1][j]
      );
    }
  }
}


console.log(graph[n - 1].reduce((a, b) => Math.max(a, b)));

//맨 위층 7부터 시작해서 아래에 있는 하나를 선택해서 최대가 되는 경로

// dfs로 해도 될거같은데?
//7 부터 시작할때, 왼쪽으로 갈지 ? 오른쪽으로 갈지 선택
// 방법 7 -> 3 , 7 -> 8 로 가능방법 ,, 두가지가 있고,
// -> 그다음은  총 6가지가 있다. 여기서 가장 누적했을 때 , 큰방법을 쓰면된다.

//마지막 줄에는 각 경로에 왔을때 가장 큰값을 고르면된다.
//매 단계 마지막에 가장 큰거를 고르면서 오면된다.
