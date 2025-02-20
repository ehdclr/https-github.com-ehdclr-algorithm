const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);
let line = 1;

let answer = "";
let d = [0];
d.push(1); //1 만들 때
d.push(2); //2 만드는 것  1+1 2
d.push(4); // 1 + 1+ 1 , 1+ 2 , 2+1 3

for (let i = 4; i <= 11; i++) {
  d[i] = d[i - 1] + d[i - 2] + d[i - 3];
}

while(t--){
    let n = Number(input[line])
    answer += d[n] + "\n";
    line++;
}

console.log(answer)