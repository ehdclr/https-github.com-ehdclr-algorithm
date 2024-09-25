const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const links = Number(input[1]);

let arr = Array.from({length : n+1}, ()=>[])

for(let i = 0 ; i< links ;i++){
  let [a,b] = input[i+2].split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
}

let visited = new Array(101).fill(false);

let cnt = 0;
function dfs(i){
  visited[i] = true;
  cnt++

  for(let x of arr[i]){
    if(!visited[x]){
      dfs(x);
    }
  }
}

dfs(1)
console.log(cnt-1);