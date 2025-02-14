const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 스택을 이용한 PPAP 변환 검증
let stack = [];

for (let i = 0; i < input.length; i++) {
    stack.push(input[i]);

    // 스택 마지막 4개의 문자열이 "PPAP"이면 변환
    if (stack.length >= 4) {
        let lastFour = stack.slice(stack.length - 4).join("");
        if (lastFour === "PPAP") {
            stack.splice(stack.length - 4, 4); // "PPAP" 제거
            stack.push("P"); // "P" 추가
        }
    }
}

// 최종 결과 확인
if (stack.length === 1 && stack[0] === "P") {
    console.log("PPAP");
} else {
    console.log("NP");
}