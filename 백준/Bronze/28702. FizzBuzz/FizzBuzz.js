const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let stack = [];

for (let i = 0; i < input.length - 1; i++) {
  let s = input[i];
  if (s === "Fizz" || s === "Buzz" || s === "FizzBuzz") {
    continue;
  } else {
    let lastNum = Number(s);
    stack.push([i + 1, lastNum]) // 몇번째인지, 숫자
  }
}

let [lastIdx, lastNum] = stack.pop()
let result = 4 - lastIdx + lastNum;

if (result % 3 === 0 && result % 5 !== 0) {
  console.log('Fizz')
} else if (result % 5 === 0 && result % 3 !== 0) {
  console.log('Buzz')
} else if (result % 3 === 0 && result % 5 === 0) {
  console.log('FizzBuzz')
} else {
  console.log(result)
}


