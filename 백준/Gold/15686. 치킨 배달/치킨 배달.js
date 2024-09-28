const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//r ,c 로 이루어ㅁ  치킨 거리 치킨집에서 가장 가까운 치킨 거리

//0은 빈칸, 1은 집 2은 치킨집

//각 지역에서 치킨 거리가 짧은 집을 골라야함
//치킨 집 개수는 m 개임

const [n, m] = input[0].split(" ").map(Number);

//치킨 집 기준으로 생각 해야할거 같음
//치킨집에서 가장 가까운 집의 합

//집에서 가장 가까운 치킨집을 골라야함

const chickens = [];
const houses = [];

for (let i = 1; i <= n; i++) {
  for(let j = 0 ; j < n ;j++){
    if (Number(input[i].split(" ")[j]) == 2) chickens.push([i -1, j]);
    else if (Number(input[i].split(" ")[j]) == 1) houses.push([i -1, j]);
  }
}


let selected = []; //조합이니까 조합으로 골라야함 중복 x
let minValue = Infinity;

//치킨집을 고르는거니까 치킨집을 먼저 고르는거지 m개의 치킨집 좌표를 구하고 각 distance를 구하고
//거기서 최소가 되는애를 출력하면됨

function getDistance(house, chicken) {
  let [houseX, houseY] = house;
  let [chickenX, chickenY] = chicken;

  return Math.abs(houseX - chickenX) + Math.abs(houseY - chickenY);
}

function dfs(depth, start) {
  if (depth == m) {
    //치킨 집 골랐을 때 거리
    let result = 0;
    for (let x of houses) {
      //집에서 치킨 거리 구해서 더하기
      let chickenlength = n + n; //가장 먼 거리 
      for (let y of selected) {
        //여기서 고른 치킨집 중에 더 작은 거리를 가지고 있는 것이 치킨 거리다. 
        //그러면 집 기준으로 더 짧은 가진 치킨집을 골라서 더하면됨
        let distance = getDistance(x,y);
        chickenlength = Math.min(distance, chickenlength)
      }
      //각 집에서 치킨 거리 구했으면 , result 더하기 
      result += chickenlength;
    }
    minValue = Math.min(minValue, result);
  }

  for (let i = start; i < chickens.length; i++) {
    selected.push(chickens[i]);
    dfs(depth + 1, i + 1);
    selected.pop();
  }
}
//조합으로 먼저 치킨집을 고르고 그다음 최소를 구하면 될거같음

dfs(0, 0);
console.log(minValue);
