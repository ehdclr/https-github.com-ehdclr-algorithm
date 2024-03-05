const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [n,m] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

console.log(a.concat(b).sort((a,b)=>a-b).join(" "));