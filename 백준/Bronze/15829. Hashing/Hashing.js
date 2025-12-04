const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const L = Number(input[0]);
const s = input[1];
const MOD = 1234567891;
const R = 31;

let ans = 0;
let power = 1;  // 31^i를 미리 계산

for (let i = 0; i < s.length; i++) {
  const idx = s.charCodeAt(i) - 96;  // 'a' = 97이므로 -96하면 a=1
  ans = (ans + idx * power) % MOD;
  power = (power * R) % MOD;  // 다음 거듭제곱 계산
}

console.log(ans);