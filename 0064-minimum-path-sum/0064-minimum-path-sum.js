/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {   
    let row = grid.length;
    let col = grid[0].length
    
    // dp의 이차원 배열이 필요하다면, 2차원 배열로 만들기
    let dp = Array.from({length : row }, ()=> new Array(col).fill(0));
    dp[0][0] = grid[0][0]; //

    //첫 행은 오른쪽으로만 무조건 가야하기떄문에  처리
    for(let i = 1 ; i < col ;i++){
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }

    //첫 열 정리
    for(let j = 1 ; j < row ; j++){
        dp[j][0] = dp[j-1][0] + grid[j][0];
    }

    for(let i = 1 ; i < row ; i++){
        for(let j = 1 ; j <col; j++){
            dp[i][j] = Math.min(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j])
        }
    }

    return dp[row-1][col-1];
};