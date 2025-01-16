/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;

    let visited = Array.from({ length: m }, () => new Array(n).fill(false));
    let flag = false;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                visited[i][j] = true;
                bt(i, j, visited, 1);
                visited[i][j] = false
            }

        }
    }

    function bt(x, y, visited, index) {
        if (flag ) return;
        if (index == word.length) {
            
            flag = true;
            return;
        }


        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny] && board[nx][ny] == word[index]) {
                visited[nx][ny] = true;
                bt(nx, ny, visited, index +1)
                visited[nx][ny] = false;
            }
        }
    }

    return flag;
};