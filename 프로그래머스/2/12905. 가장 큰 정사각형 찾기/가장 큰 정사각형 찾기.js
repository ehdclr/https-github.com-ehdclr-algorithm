function solution(board) {
    let xLength = board[0].length;
    let yLength = board.length;
    let dp = Array.from({length: yLength}, () => new Array(xLength).fill(0));
    let maxSize = 0;
    
    for(let y = 0; y < yLength; y++) {
        for(let x = 0; x < xLength; x++) {
            if(board[y][x] === 1) {  // 1일 때만 계산
                if(y === 0 || x === 0) {
                    // 첫 행이나 첫 열은 그대로 1
                    dp[y][x] = 1;
                } else {
                    // 왼쪽, 위, 대각선 중 최솟값 + 1
                    dp[y][x] = Math.min(
                        dp[y-1][x], 
                        dp[y][x-1], 
                        dp[y-1][x-1]
                    ) + 1;
                }
                maxSize = Math.max(maxSize, dp[y][x]);
            }
            // board[y][x] === 0이면 dp[y][x]는 0 유지
        }
    }
    
    return maxSize * maxSize;  // 또는 Math.pow(maxSize, 2)
}

