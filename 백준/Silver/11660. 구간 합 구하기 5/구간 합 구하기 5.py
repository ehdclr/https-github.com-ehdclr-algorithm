import sys
input = sys.stdin.readline

n, m = map(int, input().split())

# 한번에 모든 입력 읽기
matrix = [list(map(int, input().split())) for _ in range(n)]

# DP 테이블
dp = [[0] * (n + 1) for _ in range(n + 1)]

# 누적합 계산
for i in range(1, n + 1):
    for j in range(1, n + 1):
        dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + matrix[i-1][j-1]

# 출력 버퍼링
results = []
for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())
    result = dp[x2][y2] - dp[x1-1][y2] - dp[x2][y1-1] + dp[x1-1][y1-1]
    results.append(str(result))

print('\n'.join(results))