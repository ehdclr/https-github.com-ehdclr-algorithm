from collections import deque

R, C = map(int, input().split())
jihun_q = deque()
fire_q = deque()
matrix = []

for i in range(R):
    matrix.append(list(input()))

def bfs():
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    while jihun_q:
        # 1. 불 먼저 퍼뜨리기
        fire_size = len(fire_q)
        for _ in range(fire_size):
            x, y = fire_q.popleft()
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0 <= nx < R and 0 <= ny < C and matrix[nx][ny] == ".":
                    matrix[nx][ny] = "F"
                    fire_q.append([nx, ny])
        
        # 2. 지훈이 이동
        jihun_size = len(jihun_q)
        for _ in range(jihun_size):
            x, y, time = jihun_q.popleft()
            
            # 경계에 도달하면 탈출!
            if x == 0 or x == R-1 or y == 0 or y == C-1:
                return time + 1
            
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0 <= nx < R and 0 <= ny < C and matrix[nx][ny] == ".":
                    matrix[nx][ny] = "J"  # 방문 표시
                    jihun_q.append([nx, ny, time + 1])
    
    return -1  # 탈출 불가능

# 초기 위치 설정
for i in range(R):
    for j in range(C):
        if matrix[i][j] == "J":
            jihun_q.append([i, j, 0])
            matrix[i][j] = "."  # 지훈이 시작점을 일반 통로로 변경
        elif matrix[i][j] == "F":
            fire_q.append([i, j])

result = bfs()

if result != -1:
    print(result)
else:
    print('IMPOSSIBLE')