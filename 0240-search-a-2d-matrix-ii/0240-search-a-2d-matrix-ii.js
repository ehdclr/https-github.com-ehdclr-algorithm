/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length; // 행의 개수
    let n = matrix[0].length; // 열의 개수

    // 왼쪽 아래에서 탐색 시작
    let row = m - 1;
    let col = 0;

    while (row >= 0 && col < n) {
        if (matrix[row][col] === target) {
            return true; // 타겟 값 찾음
        } else if (matrix[row][col] < target) {
            col++; // 현재 값보다 크므로 오른쪽으로 이동
        } else {
            row--; // 현재 값보다 작으므로 위로 이동
        }
    }

    return false; // 타겟 값이 없음
};