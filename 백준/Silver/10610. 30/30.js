const fs =require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = input[0].split("");

if(!n.includes("0")) console.log('-1');
else {
    const sum = n.reduce((acc,cur) => acc + Number(cur),0);
    if(sum % 3 !==0) console.log('-1');
    else {const result = n.sort((a,b)=> b-a).join("");
    console.log(result);
}
}
