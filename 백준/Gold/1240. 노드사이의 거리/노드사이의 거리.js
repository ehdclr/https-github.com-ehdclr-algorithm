const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 노드의 개수 n 거리를 알고 싶은 노드쌍의 개수 M
// n - 1개의 줄에 트리 상에 연결된 두 점의 거리를 입력

// 무방향 트리임 

//인접리스트로 나타내는데 , [연결된 노드 , 길이] 이런식으로 밀어넣어야할듯

//순회를 하면서 1번 노드에서 각 노드들을 방문하면서 누적으로 하면될거같음 1 -> 2 이미 방문 그리고 방문할곳 없음 그다음 1 -> 4 -> 3 인데 
//배열로 각 노드들의 방문할때 누적해서 더하면될듯 
// 어디를 먼저 타겟을 잡고 전체 탐색을 해도 누적거리는 같을 수 밖에 없음 -> dfs
let arr = Array.from({length : n+1} , () => []);

let distance;
let visited;

//1번을 기준으로 먼저 방문 한다고 생각 
for(let i = 1 ; i <= n-1; i++) {
  let [a,b,k] = input[i].split(" ").map(Number)
  arr[a].push([b,k]);
  arr[b].push([a,k]);
}

function dfs(i,dist){
  if (visited[i]) return; //노드는 한번만 방문
  visited[i] = true;
  distance[i] = dist;
  for (let [next, cost] of arr[i]) dfs(next, dist +cost);
}

//알고 싶은 노드의 쌍 
for(let i = 0 ; i < m ;i++){
  let [n1,n2] = input[n+i].split(" ").map(Number);
  distance = new Array(n+1).fill(0); // 해당 노드까지 가는데 걸리 거리가 있으면 누적  이걸로 방문하면될거같음
  visited = new Array(n+1).fill(false);
  dfs(n1,0);
  console.log(distance[n2]);
}


//누적 하는 방법이 있나?


//1 -> 3에서 고르고 싶다할때.