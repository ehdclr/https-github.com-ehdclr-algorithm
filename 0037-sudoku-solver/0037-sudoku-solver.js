/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    //백트래킹 함수
    function bt(matrix) {
        const [row, col] = findNextEmpty(matrix);
        
        //row 가 9고 col이 9면 멈춤
        if (row === 9 && col === 9) {
            return true;
        }

        //숫자를 넣기 1에서부터 9까지 넣기 -> 가능성을 넣기
        for (let num = 1; num <= 9; num++) {
            const charNum = String(num);

            if (isValid(matrix, row, col, charNum)) {
                matrix[row][col] = charNum; 
                //백트래킹
                if (bt(matrix)) {
                    return true;
                }
                //숫자 비우기
                matrix[row][col] = '.';
            }
        }
        return false;
    }

    function isValid(matrix, row, col, num) {
        return (
            checkedRow(matrix, row, num) &&
            checkedCol(matrix, col, num) &&
            checkSmallMatrix(matrix, row, col, num)
        );
    }

    function checkedRow(matrix, row, num) {
        for (let i = 0; i < 9; i++) {
            if (matrix[row][i] === num) { //넣으려는 숫자가 행에 존재하면안됨
                return false;
            }
        }
        return true;
    }

    function checkedCol(matrix, col, num) {
        for (let i = 0; i < 9; i++) {
            if (matrix[i][col] === num) {
                return false;
            }
        }
        return true;
    }

    //넣으려는 숫자가 작은 박스에 있으면안됨
    function checkSmallMatrix(matrix, row, col, num) {
        const boxX = Math.floor(col / 3) * 3;
        const boxY = Math.floor(row / 3) * 3;

        for (let i = boxY; i < boxY + 3; i++) {
            for (let j = boxX; j < boxX + 3; j++) {
                if (matrix[i][j] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    //다음이 비었는지 안비었는지 확인
    function findNextEmpty(matrix) {
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (matrix[y][x] === '.') {
                    return [y, x];
                }
            }
        }
        return [9, 9]; //끝나면 마지막 9,9로 끝
    }

    bt(board);
};