const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, l] = input[0].split(" ").map(Number);
let numbers = input[1].split(" ").map(Number);

// 덱을 배열의 head/tail 인덱스로 구현 (shift() 최적화)
let dq = new Array(n);
let head = 0, tail = 0;

let result = "";

for (let i = 0; i < n; i++) {
    // 윈도우 범위를 벗어난 인덱스 제거
    while (head < tail && dq[head] < i - l + 1) {
        head++;
    }
    
    // 현재 값보다 큰 값들의 인덱스를 뒤에서부터 제거
    while (head < tail && numbers[dq[tail - 1]] >= numbers[i]) {
        tail--;
    }
    
    // 현재 인덱스 추가
    dq[tail++] = i;
    
    // 덱의 맨 앞이 현재 윈도우의 최솟값
    if (i === 0) {
        result = numbers[dq[head]].toString();
    } else {
        result += " " + numbers[dq[head]];
    }
}

console.log(result);