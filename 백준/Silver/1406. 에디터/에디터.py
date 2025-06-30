import sys

# 초기 문자열을 왼쪽 스택에 저장
left_stack = list(sys.stdin.readline().rstrip())
right_stack = []

# 명령어 개수
m = int(sys.stdin.readline())

for _ in range(m):
    command = sys.stdin.readline().split()
    cmd = command[0]
    
    if cmd == 'L':
        # 커서를 왼쪽으로 이동
        if left_stack:
            right_stack.append(left_stack.pop())
            
    elif cmd == 'D':
        # 커서를 오른쪽으로 이동
        if right_stack:
            left_stack.append(right_stack.pop())
            
    elif cmd == 'B':
        # 커서 왼쪽 문자 삭제
        if left_stack:
            left_stack.pop()
            
    else:  # cmd == 'P'
        # 문자 추가
        left_stack.append(command[1])

# 결과 출력: 왼쪽 스택 + 오른쪽 스택 뒤집어서
left_stack.extend(reversed(right_stack))
print(''.join(left_stack))