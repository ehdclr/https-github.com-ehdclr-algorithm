/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;

    let visited = Array.from({ length: m }, () => new Array(n).fill(false));
    let dx = [-1,1,0,0]; //x방향으로 이동
    let dy = [0,0,-1,1]; //y방향으로 이동
    let flag = false;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            //만약에 첫 단어가 같을 때, 
            if (!visited[i][j] && word[0] == board[i][j]) {
                visited[i][j] = true;
                //백트래킹 호출
                bt(i, j, visited , 1)
                visited[i][j] = false; //시작점 원상태
            }

        }
    }

    function bt(x, y, visited ,depth) {
        if(flag) return;
        if(depth == word.length){
            //깊이가 길이가 같아지면, 모든 단어가 통과 했단 듯임
            flag = true;
            return;
        }
        for(let i = 0 ; i < 4 ;i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && nx < m && ny >=0 && ny < n && word[depth] == board[nx][ny] && !visited[nx][ny]){
                visited[nx][ny] = true;
                bt(nx,ny,visited,depth+1);
                visited[nx][ny] = false;
            }

        }

    }

    return flag;
};