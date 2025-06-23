
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
console.log(n < m ? "<" : n == m ? "==" : ">")