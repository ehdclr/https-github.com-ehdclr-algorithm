/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let invalidIndexes = new Set(); // 제거해야 할 인덱스 저장

    // 1. 스택을 사용해 유효하지 않은 괄호의 인덱스 추적
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(') {
            stack.push(i); // 여는 괄호의 인덱스 저장
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop(); // 유효한 괄호 페어
            } else {
                invalidIndexes.add(i); // 닫는 괄호가 유효하지 않음
            }
        }
    }

    // 2. 스택에 남은 여는 괄호도 유효하지 않으므로 제거해야 함
    while (stack.length > 0) {
        invalidIndexes.add(stack.pop());
    }

    // 3. 유효한 문자만 결과에 추가
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (!invalidIndexes.has(i)) {
            result += s[i];
        }
    }

    return result;
};