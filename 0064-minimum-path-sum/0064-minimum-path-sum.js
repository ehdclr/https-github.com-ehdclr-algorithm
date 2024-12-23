/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let m = grid.length;      // 행의 개수
    let n = grid[0].length;   // 열의 개수

    // DP 배열 초기화
    let dp = Array.from({length: m}, () => new Array(n).fill(0));

    // 초기 위치
    dp[0][0] = grid[0][0];

    // 첫 번째 행 초기화
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    // 첫 번째 열 초기화
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    // DP 테이블 채우기
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // 마지막 위치의 최소 비용 반환
    return dp[m - 1][n - 1];
};