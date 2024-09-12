const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [l, w, h] = input[0].split(" ").map(Number);
const n = Number(input[1]);
const cubes = new Array(20).fill(0);

for (let i = 2; i <= n + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  cubes[a] = b; //2 ** a 의 갯수 체크
}

//정해진 길이에서 채울 수 있는 큐브의 크기를 정해야함 l* w*h 보다 작은

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i+=1;
  return i - 1;
}

//l w h에 맞춰서 거기 안에 넣을 수 있는 가장 큰 큐브를 정해야함 -> nearestSquare 함수로 정했음
let size = 19; //길이 l로 시작
size = nearestSquare(l)
size = Math.min(size, nearestSquare(w));
size = Math.min(size, nearestSquare(h));

let res = 0; //최종 갯수
let used = 0; //사용한 큐브 부피 l * w * h 와 비교해야함 나중에 같으면 채워 진 것

//l * w *h 에서 가장 큰 큐브 사이즈 부터 해야함

for (let i = size; i >=0; i--) {
  used *= 8; //현재 크기에 맞춰서 해야함 ,

  let cur = 2 ** i; //현재 큐브의 길이    

  let required =  parseInt(l/cur) *  parseInt(w/cur) * parseInt(h/cur) - used//남은 부피 
  //현재 큐브 크기에서 채울 수 있는 갯수  - 사용한 큐브

  let usage = Math.min(required, cubes[i]);
  res += usage;
  used += usage;
}

if(used == l * w *h) console.log(res);
else console.log(-1)