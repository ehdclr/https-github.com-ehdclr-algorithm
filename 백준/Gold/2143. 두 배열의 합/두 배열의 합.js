const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//두 부배열의 합을 더해서 T가 되는 배열의 쌍을 구하는 갯수 

const t = Number(input[0]); // 합해서 t가 되어야함

const n = Number(input[1]);
const arr1 = input[2].split(" ").map(Number);

const m = Number(input[3]);
const arr2 = input[4].split(" ").map(Number);

let count = 0;

function countSubArrayMap(arr){
    const sumCounts = new Map();
    const n = arr.length ;

    for(let i = 0 ; i < n ; i++){
        let currentSum = 0;
        for(let j = i ; j < n ; j++){
            currentSum += arr[j];
            sumCounts.set(currentSum, (sumCounts.get(currentSum) || 0) + 1);
        }
    }

    return sumCounts;
}


const aSums = countSubArrayMap(arr1);
const bSums = countSubArrayMap(arr2);

for( const [bSum, bCount] of bSums){
    const target = t - bSum; //해당 b가 가지고 있는 부분 배열의 합들을 빼서 asum이 가지고 있는 것들과 합치면, 됨
    if(aSums.has(target)){
        count += aSums.get(target) * bCount; //만약에 갯수 * 갯수 
    }
}

console.log(count)
