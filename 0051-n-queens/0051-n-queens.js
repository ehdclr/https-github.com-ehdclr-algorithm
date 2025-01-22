/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = [];
    let board = Array.from({ length: n }, () => '.'.repeat(n)); // 초기 보드 생성

    function bt(matrix, rows, queens) {
        if (rows === n) {
            // 모든 행에 퀸을 배치했을 경우
            let solution = matrix.map(row => row); // 깊은 복사
            for (let [row, col] of queens) {
                let text = solution[row].split('');
                text[col] = 'Q'; // 퀸 배치
                solution[row] = text.join('');
            }
            result.push(solution); // 결과 저장
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(matrix, rows, col, queens)) {
                queens.push([rows, col]); // 퀸 배치
                bt(matrix, rows + 1, queens); // 다음 행 탐색
                queens.pop(); // 백트래킹
            }
        }
    }

    function isValid(matrix, x, y, queens) {
        // 유효성 검사 함수
        for (let [row, col] of queens) {
            if (row === x || col === y || Math.abs(row - x) === Math.abs(col - y)) {
                return false; // 같은 열, 같은 행, 대각선에 퀸이 있는 경우
            }
        }
        return true;
    }

    bt(board, 0, []); // 백트래킹 시작
    return result;
};