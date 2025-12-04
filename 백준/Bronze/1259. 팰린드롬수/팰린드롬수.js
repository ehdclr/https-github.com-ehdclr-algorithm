const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = ""
for (let i = 0; i < input.length; i++) {
  if (input[i] == "0") {
    break;
  }

  let s = input[i];

  if (isPalindrome(s)) ans += 'yes\n'
  else ans += 'no\n'

}

function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] !== s[end]) {
      return false;
    }

    start++
    end--
  }
  return true;
}

console.log(ans)