const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = new Set(input.slice(1, n + 1));  
const arr2 = input.slice(n + 1, n + 1 + m);   

const result = arr2.filter(name => arr1.has(name)).sort();

console.log(result.length);
console.log(result.join("\n"));