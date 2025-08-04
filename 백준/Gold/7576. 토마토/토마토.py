from collections import deque

M, N = map(int, input().split())  # M: 가로(열), N: 세로(행)

tomatos = []
q = deque()

# 토마토 상태 입력받기
for i in range(N):  # N개 행
    line = list(map(int, input().split()))
    tomatos.append(line)
    
    # 처음부터 익은 토마토들을 큐에 추가 (동시 시작점)
    for j in range(M):  # M개 열
        if line[j] == 1:
            q.append([i, j, 0])  # [행, 열, 시간]

def bfs():
    dx = [-1, 1, 0, 0]  # 상하좌우
    dy = [0, 0, -1, 1]
    
    max_time = 0
    
    while q:
        x, y, time = q.popleft()
        max_time = max(max_time, time)
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            # 범위 체크 및 익지 않은 토마토 체크
            if 0 <= nx < N and 0 <= ny < M and tomatos[nx][ny] == 0:
                tomatos[nx][ny] = 1  # 익힘
                q.append([nx, ny, time + 1])  # 시간 증가
    
    return max_time

# BFS 실행
result_time = bfs()

# 모든 토마토가 익었는지 확인
all_ripe = True
for i in range(N):
    for j in range(M):
        if tomatos[i][j] == 0:  # 아직 익지 않은 토마토가 있음
            all_ripe = False
            break
    if not all_ripe:
        break

# 결과 출력
if all_ripe:
    print(result_time)
else:
    print(-1)