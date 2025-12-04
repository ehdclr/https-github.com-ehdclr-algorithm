const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//각 변들의 길이가 3 4 5 인 삼각형

//직각 삼각형 판별

//제일 긴걸

for (let tc = 0; tc < input.length - 1; tc++) {
  let [a, b, c] = input[tc].split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  let maxLength = Math.max(a, b, c);
  let notMax = [a, b, c].filter((el) => el != maxLength);

  let flags = maxLength ** 2 === notMax.map((el) => el ** 2).reduce((a, b) => a + b);


  console.log(flags ? 'right' : 'wrong')

}