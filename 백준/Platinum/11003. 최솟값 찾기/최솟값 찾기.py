import sys 
from collections import deque

input = sys.stdin.readline
N, L = map(int, input().split())
numbers = list(map(int, input().split()))

dq = deque()
result = []

for i in range(N):
    # 범위 벗어난 인덱스 제거
    while dq and dq[0] <= i - L:
        dq.popleft()
    
    # 현재 값보다 큰 값들 제거
    while dq and numbers[dq[-1]] >= numbers[i]:
        dq.pop()
    
    dq.append(i)
    result.append(str(numbers[dq[0]]))

print(" ".join(result))