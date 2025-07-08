import sys

n = int(sys.stdin.readline())
# 수정 1: 각 줄마다 하나씩 입력받아야 함
towers = []
for _ in range(n):
    towers.append(int(sys.stdin.readline()))

stack = []
answer = 0  # 수정 2: result -> answer로 변수명 통일

for i in range(n):
    # 수정 3: 조건을 <= 로 변경 (같거나 낮은 건물은 볼 수 없음)
    while stack and stack[-1][1] <= towers[i]:
        stack.pop()
    
    # 스택에 남아있는 빌딩들은 모두 현재 빌딩을 볼 수 있음
    answer += len(stack)
    
    # 현재 빌딩을 스택에 추가
    stack.append([i, towers[i]])

print(answer)