# knapsack 문제 전형적인
N, K = map(int,input().split())

wArr = [0]
cArr = [0]

for i in range(N):
  w,c = map(int,input().split()) # 각 물건의 무게 , 가치 
  wArr.append(w)
  cArr.append(c)

dp = [[0 for i in range(K+1)] for _ in range(N+1)]

for y in range(N+1):
  for x in range(K+1):
    if x < wArr[y]:
      dp[y][x] = dp[y-1][x]
      continue
    #아니라면
    dp[y][x] = max(dp[y-1][x], dp[y-1][x-wArr[y]] + cArr[y])

print(dp[-1][-1])