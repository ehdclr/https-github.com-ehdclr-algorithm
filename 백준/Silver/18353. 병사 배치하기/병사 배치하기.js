const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//전투력 높은 병사가 앞으로

//앞쪽의 병사 전투력이 항상 높아야함

//열외해야하는 병사수

const n = Number(input[0]);
const armies = input[1].split(" ").map(Number).reverse();

//인덱스 카운트가 2넘으면 없애면된다..

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}
let lis = [0]
for(let x of armies){
    if(x > lis[lis.length -1]){
        lis.push(x)
    } else{
        let index = lowerBound(lis,x,0,lis.length);
        lis[index] = x
    }
}

console.log(n - (lis.length -1))
