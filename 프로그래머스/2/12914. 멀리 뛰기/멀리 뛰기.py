def solution(n):
    dp = [0] * (2001) 
    
    # 한칸 이미 뛰었을 때 ,
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2 # 두가지 1,1  2칸 
    
    for i in range(3, n+1):
        dp[i] += dp[i-1] + dp[i-2]
        dp[i] %= 1234567
        # 만약 4번째라면, 3번째 칸에서 시작하는 방법과 , 2번째 칸에서 시작하는방법
    
    return dp[n]
    # 한번에 한칸 혹은 두칸 
    # dp로 푸는 문제 이전 상태를 memo -> dp