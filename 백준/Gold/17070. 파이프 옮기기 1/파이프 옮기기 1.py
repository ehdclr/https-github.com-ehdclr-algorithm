import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
memo = {}

def dfs(x, y, direction):
    # 목표 지점 도착
    if x == n - 1 and y == n - 1:
        return 1
    
    # 메모이제이션
    if (x, y, direction) in memo:
        return memo[(x, y, direction)]
    
    count = 0
    
    # 가로 방향 (direction == 0)
    if direction == 0:
        # 가로 -> 가로
        if x + 1 < n and matrix[y][x + 1] == 0:
            count += dfs(x + 1, y, 0)
        # 가로 -> 대각선
        if (x + 1 < n and y + 1 < n and 
            matrix[y][x + 1] == 0 and matrix[y + 1][x] == 0 and matrix[y + 1][x + 1] == 0):
            count += dfs(x + 1, y + 1, 2)
    
    # 세로 방향 (direction == 1)
    elif direction == 1:
        # 세로 -> 세로
        if y + 1 < n and matrix[y + 1][x] == 0:
            count += dfs(x, y + 1, 1)
        # 세로 -> 대각선
        if (x + 1 < n and y + 1 < n and 
            matrix[y][x + 1] == 0 and matrix[y + 1][x] == 0 and matrix[y + 1][x + 1] == 0):
            count += dfs(x + 1, y + 1, 2)
    
    # 대각선 방향 (direction == 2)
    else:
        # 대각선 -> 가로
        if x + 1 < n and matrix[y][x + 1] == 0:
            count += dfs(x + 1, y, 0)
        # 대각선 -> 세로
        if y + 1 < n and matrix[y + 1][x] == 0:
            count += dfs(x, y + 1, 1)
        # 대각선 -> 대각선
        if (x + 1 < n and y + 1 < n and 
            matrix[y][x + 1] == 0 and matrix[y + 1][x] == 0 and matrix[y + 1][x + 1] == 0):
            count += dfs(x + 1, y + 1, 2)
    
    memo[(x, y, direction)] = count
    return count

print(dfs(1, 0, 0))  # 초기: (1, 0) 위치, 가로 방향