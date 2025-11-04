function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    let maxLen = 0;
    
    // DP 테이블 생성 (board를 그대로 사용할 수도 있지만, 명확성을 위해 복사)
    const dp = board.map(row => [...row]);
    
    // 첫 행과 첫 열에서 최대값 찾기
    for (let i = 0; i < rows; i++) {
        if (dp[i][0] === 1) maxLen = 1;
    }
    for (let j = 0; j < cols; j++) {
        if (dp[0][j] === 1) maxLen = 1;
    }
    
    // DP 진행
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] === 1) {
                // 현재 위치를 오른쪽 아래 꼭짓점으로 하는 정사각형의 최대 크기
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }
    
    return maxLen * maxLen;
}
