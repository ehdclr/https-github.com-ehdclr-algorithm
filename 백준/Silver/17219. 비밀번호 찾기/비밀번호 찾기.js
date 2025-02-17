const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

//비밀번호는 알파벳 대문자로만 이뤄져있음

// n + 2부터 m개의 줄에 걸쳐 비밀번호를 찾으려는 사이트가 나옴
let mp = new Map();

for (let i = 1; i <= n; i++) {
  let [site, pw] = input[i].split(" ");
  mp.set(site, pw);
}

let answer = "";

for (let i = n + 1; i <= n + m; i++) {
  let find = input[i];
  answer += mp.get(find) + "\n";
}

console.log(answer);
