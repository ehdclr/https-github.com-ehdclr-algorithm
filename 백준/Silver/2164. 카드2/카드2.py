import sys
from collections import deque

n = int(sys.stdin.readline())

# 제일 위에있는걸 버리고 그다음에 제일 위에있는 카드를 제일 아래에 있는걸 버린다.

# 홀수 카운트 경우 버림
# 짝수 카운트는 뒤에 넣음

q = deque()

for i in range(1, n+1):
  q.append(i)

count = 1

while len(q) != 1 or count % 2 == 0:
  # 구현을 하라 할때 , 마지막 하나가 남는데, 

  if count % 2 == 0:
    q.append(q.popleft())
  else :
    q.popleft()
  
  count +=1


print(q[-1])
  


