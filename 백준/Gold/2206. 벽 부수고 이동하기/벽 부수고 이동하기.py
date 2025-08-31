
from collections import deque


def bfs():
  q = deque()
  visited[0][0][0] = True
  q.append([0,0,0,1])
  dx = [-1,1,0,0]
  dy = [0,0,-1,1]


  while q:
    cur_x,cur_y,wall_broken,dist = q.popleft()

    if cur_x == n -1 and cur_y == m-1:
      return dist
    
    for i in range(4):
      nx = dx[i] + cur_x
      ny = dy[i] + cur_y

      if nx < 0 or nx >= n or ny < 0 or ny >= m:
        continue
      
      # 방문안한 지점 다음 지점 방문 
      if matrix[nx][ny] == 0 and not visited[nx][ny][wall_broken]:
        visited[nx][ny][wall_broken] = True
        q.append([nx,ny,wall_broken,dist+1])

      # 벽을 안부신 상태에서 벽을 부실때 (특수 경우는 항상 조건을 빼 놓는게 좋다)
      if matrix[nx][ny] == 1 and wall_broken == 0 and not visited[nx][ny][1]:
        visited[nx][ny][1] = True
        q.append([nx,ny,1,dist+1])

  return -1

n,m = map(int, input().split())
matrix = []
visited = [[[False,False] for _ in range(m)] for _ in range(n)]


for _ in range(n):
  matrix.append(list(map(int,input())))


print(bfs())
  
  
  



  
  


