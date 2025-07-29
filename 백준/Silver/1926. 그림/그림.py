from collections import deque

N, M = map(int, input().split())

matrix = []
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1] 

for _ in range(N):
    matrix.append(list(map(int, input().split()))) 

result = 0
MAX = 0

def bfs(start_x, start_y):
    q = deque()
    q.append([start_x, start_y])
    matrix[start_x][start_y] = 0  # 방문 처리
    
    area = 1  # 현재 그림의 넓이
    
    while q:
        curX, curY = q.popleft()
        
        for i in range(4):
            nx = curX + dx[i]
            ny = curY + dy[i]
            
            if nx >= 0 and ny >= 0 and nx < N and ny < M and matrix[nx][ny] == 1:
                q.append([nx, ny])
                matrix[nx][ny] = 0  # 방문 처리
                area += 1  # 넓이 증가
    
    return area

for i in range(N):
    for j in range(M):
        if matrix[i][j] == 1:
            area = bfs(i, j)
            MAX = max(MAX, area)
            result += 1

print(str(result) + "\n" + str(MAX))