/**
 * @param {string} s
 * @return {number}
 */

 //TODO 시간복잡도 O(n) , O(n)의 방법
//  var calculate = function (s) {
//     let stack = [];
//     let curNum = 0;
//     let prevOper = "+"; // 초기 연산자는 '+'로 설정

//     s = s.replace(/\s+/g, ""); 

//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];

//         // 숫자인 경우, 숫자를 누적
//         if (Number.isInteger(+char)) {
//             curNum = curNum * 10 + Number(char);
//         }

//         // 연산자이거나 마지막 문자인 경우
//         if (!Number.isInteger(+char) || i === s.length - 1) {
//             if (prevOper === "+") {
//                 stack.push(curNum);
//             } else if (prevOper === "-") {
//                 stack.push(-curNum);
//             } else if (prevOper === "*") {
//                 stack.push(stack.pop() * curNum);
//             } else if (prevOper === "/") {
//                 stack.push(Math.trunc(stack.pop() / curNum)); // 정수 나눗셈
//             }
//             prevOper = char; // 현재 연산자로 업데이트
//             curNum = 0; // 현재 숫자 초기화
//         }
//     }

//     // 스택의 모든 값을 더한 결과 반환
//     return stack.reduce((a, b) => a + b, 0);
// };

//TODO O(n) O(1) 방법

/**
 * @param {string} s
 * @return {number}
 */

 //TODO 시간복잡도 O(n) , O(n)의 방법
//  var calculate = function (s) {
//     let stack = [];
//     let curNum = 0;
//     let prevOper = "+"; // 초기 연산자는 '+'로 설정

//     s = s.replace(/\s+/g, ""); 

//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];

//         // 숫자인 경우, 숫자를 누적
//         if (Number.isInteger(+char)) {
//             curNum = curNum * 10 + Number(char);
//         }

//         // 연산자이거나 마지막 문자인 경우
//         if (!Number.isInteger(+char) || i === s.length - 1) {
//             if (prevOper === "+") {
//                 stack.push(curNum);
//             } else if (prevOper === "-") {
//                 stack.push(-curNum);
//             } else if (prevOper === "*") {
//                 stack.push(stack.pop() * curNum);
//             } else if (prevOper === "/") {
//                 stack.push(Math.trunc(stack.pop() / curNum)); // 정수 나눗셈
//             }
//             prevOper = char; // 현재 연산자로 업데이트
//             curNum = 0; // 현재 숫자 초기화
//         }
//     }

//     // 스택의 모든 값을 더한 결과 반환
//     return stack.reduce((a, b) => a + b, 0);
// };

//TODO O(n) O(1) 방법

var calculate = function(s){
    //바로 연산을 하는 것 *와 /를 바로 연산하기 
    s = s.replace(/\s+/g,"");
    let sum = 0;

    let stack = [];
    
    let curNum = 0;
    let prevOper = "+"
    
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // 숫자인 경우
        if (Number.isInteger(+char)) {
            curNum = curNum * 10 + Number(char); // 숫자를 누적
        }

        // 연산자이거나 마지막 문자인 경우
        if (!Number.isInteger(+char) || i === s.length - 1) {
            if (prevOper === "+") {
                stack.push(Number(curNum))
            } else if (prevOper === "-") {
                stack.push(-Number(curNum))
            } else if (prevOper === "*") {
                stack.push(stack.pop() * curNum);
            } else if (prevOper === "/") {
                stack.push(Math.trunc(stack.pop() / curNum) )
            }

            // 연산자 업데이트
            prevOper = char;
            curNum = 0; // 현재 숫자 초기화
        }
    }

    console.log(stack)

    return stack.reduce((a,b)=> a+b)
}

console.log(calculate("3+2*2"))