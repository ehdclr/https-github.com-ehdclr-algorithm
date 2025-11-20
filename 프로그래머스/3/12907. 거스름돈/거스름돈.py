count = 0

def solution(n, money):
    dp = [0] * (n + 1)
    dp[0] = 1 #0원을 만들어주는 방법 한가지
    #n원을 줄 때 , 거슬러 주는 방법 
    # dp 아니면 재귀 (memoization)은 필요 없나?
    # 이미 전의 상황을 기억을 하고 그다음 상황을 불러오는 것 보니 nlogn 은 재귀 하는거같음 분할 정복
    # 재귀의 결국 break point를 잡아야한다. 
    for coin in money:
        for amount in range(coin, n + 1): # coin에서 돈까지
            dp[amount] += dp[amount - coin] # 그니까 잔여 금액에서 코인에서뺀만큼 더하고
            dp[amount] %= 1000000007
    return dp[n]
    
    # 분할 정복 

# 1 2 5 원이 있다면, 4가지 방법으로 5원을 거슬러 줄 수 있다. 

# Finn 이 거슬러 줄 방법의 수 
# n < 100_000 자연수 nlon 이 가능할거같은데 
# 화폐단위는 100종류 이하 
# 1_000_000_007로 나눈 나머지 
