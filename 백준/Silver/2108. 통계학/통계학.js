const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");


let n = Number(input[0])
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

arr.sort((a, b) => a - b)

let s = new Map()

arr.map((el) => {
  if (s.has(el)) {
    s.set(el, s.get(el) + 1)
  } else {
    s.set(el, 1)
  }
})

let maxCnt = 0
for (let x of s.values()) {
  maxCnt = Math.max(maxCnt, x)
}

let ans = [];
for (let [key, val] of s.entries()) {
  if (val === maxCnt) {
    ans.push(key)
  }
}


ans.sort((a, b) => a - b)


console.log(parseInt(Math.round(arr.reduce((a, b) => a + b) / n)))
console.log(arr[parseInt(arr.length / 2)])
console.log(ans.length > 1 ? ans[1] : ans[0])
console.log(Math.abs(arr[arr.length - 1] - arr[0]))