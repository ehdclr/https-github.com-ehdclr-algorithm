def solution(board):
    x_len = len(board[0])
    y_len = len(board)
    
    dp = [[0] * x_len for _ in range(y_len)]
    maxSize = 0;
    
    for y in range(y_len):
        for x in range(x_len):
            if board[y][x] == 1:
                if x == 0 or y == 0:
                    dp[y][x] = 1 # 첫행이나 첫열은 무조건 1
                else:
                    dp[y][x] = min(dp[y-1][x], dp[y][x-1], dp[y-1][x-1]) + 1
                
                maxSize = max(maxSize, dp[y][x])
            
    return maxSize ** 2