# L 뱀의 변환 횟수 

# L개의 줄에는 뱀의 방향 변환 정보가 주어진다. 

# 몸길이를 늘려 머리를 다음칸에 위치시킴 

# 벽이나 자기자신의 몸과 부딪히면 게임이 끝난다. 

# 이동한 칸에 사과가 있으면, 사과가 없어지고 꼬리는 안움직임 

# 사과가 없다면 꼬리가 위치한 칸을 비워준다. -> 사과를 먹으면 늘어나고 , 사과를 먹지 않으면 그대로 지나간다. 

# 몇초에 끝나는지 

# 꼬리랑 같은칸에 만나도 문제가 생김 꼬리도 한칸씩 옮김
from collections import deque

N = int(input())
matrix = [[0 for _ in range(N+1)] for _ in range(N+1)] # N x N 매트릭스 


# 머리, 꼬리의 기준을 잡아야할거같음 
# 먹이의 개수 
K = int(input())
for _ in range(K):
  a,b = map(int,input().split())
  matrix[a][b] = 1 

# 방향 
L = int(input())
move = {} # key : 초  value : 방향 
for _ in range(L):
  s = input().split()
  x = int(s[0])
  d = s[1]
  move[x] = d 

direction = [[0,1],[1,0],[0,-1],[-1,0]] # 방향 L 이라면 -1 인덱스 D라면 +1 인덱스 해서 그 방향으로 가면됨
# 방향이 L 이 되면 direction = direction[4:] + direction[:4] 하면됨
# 방향이 R 이 되면 direction = direction[1:] + direction[:1] 하면됨

q = deque()  # 머리 좌표
q.append((1,1)) # x좌표, y좌표
cnt = 0 # 현재 카운트 

memo = []# 지나온길 기록 
memo.append([1,1])

while q:
  hx,hy = q.popleft()

  # print(f'cnt : {cnt} hy: {hy} hx: {hx} memo: {memo}')
  # 종료 조건
  if cnt in move:
    if move[cnt] == "L":
      direction = direction[3:] + direction[:3]
    elif move[cnt] == "D":
      direction = direction[1:] + direction[:1]
  nhx,nhy = [hx + direction[0][1], hy + direction[0][0]]

  if nhx < 1 or nhx > N or nhy < 1 or nhy > N:
    cnt += 1
    break # 멈춰야함
  if nhx >= 1 and nhy >=1 and nhx <= N and nhy <= N:
    # 일단 지나가기전에 길 체크
    flags = False
    for [check_x,check_y] in memo:
      if check_x == nhx and check_y == nhy:
        flags = True
    if flags:
      cnt += 1
      break

    if matrix[nhy][nhx] == 1:
      matrix[nhy][nhx] = 0
      memo.append(([nhx,nhy])) # 먹으면 메모에 기록
    else: #일반 길이면
      if memo:
        memo = memo[1:]
      memo.append([nhx,nhy])

    cnt += 1
    q.append((nhx,nhy))  


print(cnt)
    




#사과를 먹으면 꼬리는 그대로 있고, 머리만 옮김 
# 머리 초기 값을 (1,1)로두고 꼬리는 (1,0)으로 둔다. 큐가 두개가 필요함
# 사과를 먹으면 꼬리 큐에는 넣지않고, 가만히 냅둔다. 가만히 있는것도 큐에 넣고 , 그다음에 넣음 


# 머리 방향이 어디인지도 중요
# 맨 처음은 오른쪽방향으로 쭉 직진 , [0,1] 방향 만약 왼쪽으로 간다면 [-1,0] 또 왼쪽으로 가면 [0,-1] 또 왼쪽은 [1,0]
# 방향은 [[0,1],[1,0],[0,-1],[-1,0]] #  왼쪽으로 가면 인덱스 -1 오른쪽으로 간다하면 인덱스 +1 하면될듯?
# 방향은 항상 오른쪽으로 가다가 전환을 하는 것 L은 왼쪽 D


