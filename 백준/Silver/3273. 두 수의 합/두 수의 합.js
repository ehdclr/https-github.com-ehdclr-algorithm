const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let x = parseInt(input[2]);

arr.sort((a, b) => a - b); // 명시적으로 오름차순 정렬

let startIndex = 0;
let endIndex = arr.length - 1;
let result = 0;

while (startIndex < endIndex) {
    let sum = arr[startIndex] + arr[endIndex];
    
    if (sum == x) {
        result++;
        startIndex++;  // 찾았으니 둘 다 이동 (또는 한쪽만)
    } else if (sum > x) {
        endIndex--;    // 합이 크면 큰 수를 줄임
    } else {
        startIndex++;  // 합이 작으면 작은 수를 키움
    }
}

console.log(result);