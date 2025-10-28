const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const T = Number(input[0]);

let line = 1;

for (let tc = 0; tc < T; tc++) {
  const cmds = input[line++];
  const n = Number(input[line++]);
  const arrStr = input[line++].trim();

  // 배열 파싱
  let arr = [];
  if (n > 0) {
    arr = arrStr.slice(1, -1).split(",");
  }

  let isReversed = false;
  let flags = false;
  let left = 0;
  let right = arr.length - 1;

  for (let cmd of cmds) {
    if (cmd === 'R') {
      isReversed = !isReversed;
    } else if (cmd === 'D') {
      if (left > right) {
        flags = true;
        break;
      }
      if (isReversed) {
        right--;
      } else {
        left++;
      }
    }
  }

  if (flags) {
    console.log('error');
  } else {
    let result = [];
    for (let i = left; i <= right; i++) {
      result.push(arr[i]);
    }
    if (isReversed) {
      result.reverse();
    }
    console.log("[" + result.join(",") + "]");
  }
}