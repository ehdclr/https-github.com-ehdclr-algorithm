const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [l, c] = input[0].split(" ").map(Number);
const alpha = input[1].split(" ").sort();

//암호는 서로다른 L개의 알파벳으로 구성되고 최소한개의 모음과 두개의 자음으로 구성되어있다.
//알파벳이 증가하는 순서로 된다.
// 조합을 사용하면 됨 중복 조합도 아니고

let answer = "";
let arr = new Set(["a", "e", "i", "o", "u"]);

function bt(depth, letters, count1, count2, startIndex) {
  //count1은 모음 개수 count2는 자음 개수
  if (depth === l) {
    //깊이가 4여야함
    if (count1 >= 1 && count2 >= 2) {
      let current = letters.join("");
      answer += current + "\n";
    }
    return;
  }

  for (let i = startIndex; i < alpha.length; i++) {
    letters.push(alpha[i]);
    if (arr.has(alpha[i])) {
      bt(depth + 1, letters, count1 + 1, count2, i + 1);
    } else {
      bt(depth + 1, letters, count1, count2 + 1, i + 1);
    }
    letters.pop();
  }
}

bt(0, [], 0, 0, 0);
console.log(answer);
