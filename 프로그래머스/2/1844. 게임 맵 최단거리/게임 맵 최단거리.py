from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    visited = [[False] * m for _ in range(n)]
    
    q = deque()
    q.append([0,0,1])
    visited[0][0] = True
    
    while q:
        cx,cy,dist = q.popleft()
        
        if cx == n - 1 and cy == m - 1:
            return dist
        
        for i in range(4):
            nx = dx[i] + cx
            ny = dy[i] + cy
            
            if nx < 0 or nx >= n or ny < 0 or ny >= m or visited[nx][ny] or maps[nx][ny] == 0 :
                continue
            
            visited[nx][ny] = True
            q.append([nx,ny,dist+1])
    
    return -1