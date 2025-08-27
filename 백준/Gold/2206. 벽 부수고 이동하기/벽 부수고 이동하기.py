from collections import deque

n, m = map(int, input().split())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, list(input().strip()))))

# 3차원 visited 배열: [행][열][벽부순여부]
visited = [[[False, False] for _ in range(m)] for _ in range(n)]

def bfs():
    queue = deque([(0, 0, 0, 1)])  # (x, y, wall_broken, distance)
    visited[0][0][0] = True
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    while queue:
        x, y, wall_broken, dist = queue.popleft()
        
        if x == n-1 and y == m-1:
            return dist
        
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            
            if 0 <= nx < n and 0 <= ny < m:
                # 빈 공간으로 이동
                if matrix[nx][ny] == 0 and not visited[nx][ny][wall_broken]:
                    visited[nx][ny][wall_broken] = True
                    queue.append((nx, ny, wall_broken, dist + 1))
                # 벽을 부수고 이동 (아직 벽을 안 부쉈을 때만)
                elif matrix[nx][ny] == 1 and wall_broken == 0 and not visited[nx][ny][1]:
                    visited[nx][ny][1] = True
                    queue.append((nx, ny, 1, dist + 1))
    
    return -1

print(bfs())