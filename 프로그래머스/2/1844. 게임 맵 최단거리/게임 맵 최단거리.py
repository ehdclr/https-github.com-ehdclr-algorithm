from collections import deque

def solution(maps):
    # 최단거리는 queue bfs
    q = deque()
    visited = [[False] * len(maps[0]) for _ in range(len(maps))]
    dx = [-1,1,0,0] # 이동
    dy = [0,0,-1,1] # 상하 좌우 이동이 가능해야함
    q.append([0,0,1]) # 첫칸은 한칸으로 침 

    visited[0][0] = True # 이미 청므 방문했음 
    flags = False
    
    while q:
        curx, cury, dist = q.popleft()
             
        if curx == len(maps) -1 and cury == len(maps[0]) - 1:
            flags = True
            return dist
    
        # 상하좌우 움직여야함
        for i in range(4):
          nx = dx[i] + curx
          ny = dy[i] + cury
          if nx >= 0 and nx < len(maps) and ny >= 0 and ny < len(maps[0]) and not visited[nx][ny] and maps[nx][ny] == 1:
            visited[nx][ny] = True
            q.append([nx, ny, dist +1])
            
    if not flags:
        return -1
  