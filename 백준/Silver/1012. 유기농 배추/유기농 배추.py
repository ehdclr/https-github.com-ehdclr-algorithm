from collections import deque

def bfs(matrix, start_x, start_y, M, N):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    q = deque()
    q.append([start_x, start_y])
    matrix[start_x][start_y] = 0  # 방문 처리
    
    while q:
        curX, curY = q.popleft()
        
        for i in range(4):
            nx = curX + dx[i]
            ny = curY + dy[i]
            
            if 0 <= nx < N and 0 <= ny < M and matrix[nx][ny] == 1:
                matrix[nx][ny] = 0  # 방문 처리
                q.append([nx, ny])

T = int(input())

for _ in range(T):
    M, N, K = map(int, input().split())  # 가로 길이, 세로 길이, 배추 개수
    count = 0
    
    # 올바른 2차원 배열 초기화
    matrix = [[0] * M for _ in range(N)]
    
    # 배추 위치 입력
    for _ in range(K):
        Y, X = map(int, input().split())
        matrix[X][Y] = 1
    
    # 연결된 컴포넌트 찾기
    for i in range(N):
        for j in range(M):
            if matrix[i][j] == 1:
                bfs(matrix, i, j, M, N)
                count += 1
    
    print(count)