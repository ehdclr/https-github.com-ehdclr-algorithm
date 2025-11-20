# 같은 문제를 중복처리해야하고, 이전 문제를 기억해야함 memoization 필요
# bottom-up 방식으로 dp로 처리해야함
dp =[] 
def solution(n, money):
    global dp
    dp = [0] * (n + 1)
    dp[0] = 1 # 처음 0원을 만드는 경우는 한가지
    # 그렇다면 
    for coin in money:
        for amount in range(coin, n +1): # 남은 차액 금액을 다시 구해야함
            dp[amount] += dp[amount - coin] # 현재 코인으로 위에 상태를 더함
    return dp[n]