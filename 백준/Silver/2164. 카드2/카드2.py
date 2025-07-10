from collections import deque

n = int(input())
q = deque(range(1, n+1))

while len(q) > 1:
    q.popleft()  # 맨 위 카드 버리기
    if q:  # 카드가 남아있다면
        q.append(q.popleft())  # 맨 위 카드를 맨 아래로

print(q[0])