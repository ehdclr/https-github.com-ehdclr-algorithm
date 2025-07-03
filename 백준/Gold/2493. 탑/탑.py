import sys

n = int(sys.stdin.readline())
towers = list(map(int, sys.stdin.readline().split()))

result = [0] * n
stack = []  # (인덱스, 높이) 저장

for i in range(n):
    # 현재 탑보다 낮은 탑들을 스택에서 제거
    # (이 탑들은 현재 탑에 의해 가려짐)
    while stack and stack[-1][1] < towers[i]:
        stack.pop()
    
    # 스택이 비어있지 않으면 현재 탑의 신호를 받을 수 있는 탑이 있음
    if stack:
        result[i] = stack[-1][0] + 1  # 1-based 인덱스
    
    # 현재 탑을 스택에 추가
    stack.append((i, towers[i]))

print(*result)