/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function (s) {
    let stack = [];
    let curNum = 0;
    let prevOper = "+"; // 초기 연산자는 '+'로 설정

    // 공백 제거 후 한 문자씩 처리
    s = s.replace(/\s+/g, ""); 

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // 숫자인 경우, 숫자를 누적
        if (Number.isInteger(+char)) {
            curNum = curNum * 10 + Number(char);
        }

        // 연산자이거나 마지막 문자인 경우
        if (!Number.isInteger(+char) || i === s.length - 1) {
            if (prevOper === "+") {
                stack.push(curNum);
            } else if (prevOper === "-") {
                stack.push(-curNum);
            } else if (prevOper === "*") {
                stack.push(stack.pop() * curNum);
            } else if (prevOper === "/") {
                stack.push(Math.trunc(stack.pop() / curNum)); // 정수 나눗셈
            }
            prevOper = char; // 현재 연산자로 업데이트
            curNum = 0; // 현재 숫자 초기화
        }
    }

    // 스택의 모든 값을 더한 결과 반환
    return stack.reduce((a, b) => a + b, 0);
};