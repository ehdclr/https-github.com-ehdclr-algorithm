var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let result = false;

    let visited = Array.from({ length: m }, () => new Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                visited[i][j] = true;
                bt(1, visited, i, j);
                visited[i][j] = false;
            }
        }
    }

    function bt(depth, visited, x, y) {
        if (result) return;

        if (depth === word.length) {
            result = true;
            return;
        }

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny] && board[nx][ny] === word[depth]) {
                visited[nx][ny] = true;
                bt(depth + 1, visited, nx, ny);
                visited[nx][ny] = false;
            }
        }
    }

    return result;
};