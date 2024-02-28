const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

a.sort((a,b)=> a-b);
b.sort((a,b)=>b-a);

let sum = 0;
for(let i= 0 ; i<n;i++){
    sum += a[i]* b[i];
}

console.log(sum);