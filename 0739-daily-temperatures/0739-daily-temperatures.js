/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(temperatures) {
      let n = temperatures.length;
    let arr = new Array(n).fill(0); 
    let stack = []; // 인덱스를 저장하는 스택

    for (let idx = 0; idx < n; idx++) {
        let temperature = temperatures[idx];

        // 현재 온도가 스택에 저장된 온도보다 높다면 결과 계산
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperature) {
            let lastIdx = stack.pop();
            arr[lastIdx] = idx - lastIdx;
        }

        // 현재 인덱스를 스택에 추가
        stack.push(idx);
    }

    return arr;
};