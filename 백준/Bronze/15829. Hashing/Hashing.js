const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// hahing

//해시함수


// 최대한 충돌이 적게 나야함

//r 은 31

//num * 31 mod 1234567891
//M 1234567891

const L = Number(input[0]);
let s = input[1];
let alpha = [0]

for (let i = 97; i <= 122; i++) {
  alpha.push(String.fromCharCode(i))
}

let ans = 0;
for (let i = 0; i < s.length; i++) {
  let idx = alpha.indexOf(s[i])
  ans += idx * Math.pow(31, i)
}
ans %= 1234567891



console.log(ans)

