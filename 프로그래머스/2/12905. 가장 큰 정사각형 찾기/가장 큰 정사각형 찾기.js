function solution(board) {
  const row = board.length;
  const col = board[0].length;

  // 각 칸까지 끝나는 가장 큰 정사각형 한 변의 길이 저장
  const dp = Array.from({ length: row }, () => Array(col).fill(0));
  let maxSize = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 0) {
        dp[i][j] = 0;                 // 0이면 정사각형 불가
      } else if (i === 0 || j === 0) {
        dp[i][j] = 1;                 // 첫 행/열에서 1이면 길이 1 정사각형
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j],               // 위
          dp[i][j - 1],               // 왼
          dp[i - 1][j - 1]            // 왼위
        ) + 1;
      }

      maxSize = Math.max(maxSize, dp[i][j]);
    }
  }

  return maxSize * maxSize;
}
