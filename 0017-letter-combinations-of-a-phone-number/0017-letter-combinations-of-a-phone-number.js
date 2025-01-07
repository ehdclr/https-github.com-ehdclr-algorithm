/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []; // 빈 문자열 처리

    // 숫자-문자 매핑
    const object = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = []; // 최종 결과 저장

    // DFS 함수 정의
    function dfs(index, path) {
        // 종료 조건: digits의 길이만큼 선택했을 때
        if (index === digits.length) {
            result.push(path.join(''));
            return;
        }

        // 현재 숫자의 문자 배열 가져오기
        let num = digits[index];
        let letters = object[num];

        for (let letter of letters) {
            path.push(letter); // 문자 추가
            dfs(index + 1, path); // 다음 숫자로 이동
            path.pop(); // 백트래킹
        }
    }

    dfs(0, []); // DFS 시작
    return result;
};