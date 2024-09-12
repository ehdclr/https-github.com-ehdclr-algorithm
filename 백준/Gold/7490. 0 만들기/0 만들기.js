const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//0이 되는 수식 만들기

let testCase = Number(input[0]);
let selected;

for (let tc = 1; tc <= testCase; tc++) {
  let n = Number(input[tc]);
  let arr = [];

  selected = [];

  let answer = "";

  //숫자가 세개면  depth는 n-1
  //기준을 수식으로 잡는거

  for (let i = 1; i <= n; i++) arr.push(i);

  dfs(arr, 0, n, selected);
  console.log();
}

function dfs(arr, depth, n, selected, answer) {
  if (depth == n - 1) {
    let str = "";
    for (let i = 0; i < arr.length - 1; i++) str += arr[i] + selected[i];
    str += arr[arr.length - 1];
    if (eval(str.split(" ").join("")) == 0) console.log(str)
    return;
  }

  for (let x of [" ", "+", "-"]) {
    selected.push(x);
    dfs(arr, depth + 1, n, selected, answer);
    selected.pop();
  }
}
