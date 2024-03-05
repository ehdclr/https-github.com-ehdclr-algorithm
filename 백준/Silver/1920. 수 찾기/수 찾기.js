const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
const m = Number(input[2]);
const b = input[3].split(" ").map(Number);

a.sort((a,b)=>a-b);

let start = 0;
let end = n-1;

let result = "";

for(let i = 0 ; i<m;i++){
    result += binarySearch(a,b[i],start,end) + "\n";
}
console.log(result);

function binarySearch(arr,target,start,end){
    while(start<=end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] == target) return 1;
        else if(arr[mid] > target) end = mid-1;
        else start = mid+1
    }
    return 0;

}