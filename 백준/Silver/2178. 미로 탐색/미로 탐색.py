# 최단거리를 구하는거니까 BFS

from collections import deque

N,M = map(int,input().split())
matrix = []
MIN = float('inf')

q = deque()

for _ in range(N):
  matrix.append(list(map(int, input())))

q.append([0,0,1])

dx =[-1,1,0,0]
dy =[0,0,-1,1]

while q:
  curX,curY, distance = q.popleft()

  for i in range(4):
    nx = dx[i] + curX
    ny = dy[i] + curY
    if nx >= 0 and ny >= 0 and nx < N and ny < M and matrix[nx][ny] == 1:
      matrix[nx][ny] += distance
      q.append([nx,ny, distance + 1])

print(matrix[N-1][M-1])






