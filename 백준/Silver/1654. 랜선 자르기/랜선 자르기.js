const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [k, n] = input[0].split(" ").map(Number);
//k는 이미 갖고있는 랜선
//n은 필요한 랜선 개수

//k의 랜선으로 잘라내서 같은 길이의 n개로 맞추는거

//k에서 잘라낼 때 최대한 길이를 맞춰야함

//-> 조건 n개를 맞추는데 랜선 길이는 최대여야함

let wires = [];

for (let i = 1; i <= k; i++) wires.push(Number(input[i]));

let start = 1;
let end = wires.reduce((a, b) => Math.max(a, b)); //상한과 하한은 맞춰져있음 짧게 길이가 산정되면 전체 랜선은 많아지고
//길게 랜선이 정해지면 전체 랜선의 갯수가 적어진다. -> 상한과 하한은 정해짐

let length = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); //이게 자를 랜선의 길이라고 생각하면된다.
  let total = 0; //랜선의 갯수다 n개에 맞춰지면된다.
  for (let x of wires) {
     total += parseInt(x / mid); // 랜선의 길이보다 길면 0 이니까 체크해야함
  }

  if(total < n ){
    //전체 랜선의 갯수가 작은건, 랜선을 길게 산정했기 때문에
    end = mid -1;
  }
  else{
    length = mid;
    start = mid + 1;
  }
}

console.log(length);
