import sys

n = int(sys.stdin.readline().strip())
stack = []

for _ in range(n):
    command = sys.stdin.readline().split()
    cmd = command[0]

    if cmd == "push":
        stack.append(int(command[1]))
    elif cmd == "top":
        print(stack[-1] if stack else -1)  # 더 파이썬스러운 방식
    elif cmd == "size":
        print(len(stack))
    elif cmd == "empty":
        print(0 if stack else 1)  # 더 간결하게
    elif cmd == "pop":
        print(stack.pop() if stack else -1)