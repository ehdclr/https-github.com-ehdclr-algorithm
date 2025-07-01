import sys

n = int(sys.stdin.readline().strip())

stack = []

for _ in range(n):
    command = sys.stdin.readline().split()

    cmd = command[0]

    if cmd == "push":
        stack.append(int(command[1]))
    elif cmd == "top":
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[len(stack)-1])
    elif cmd == "size":
        print(len(stack))
    elif cmd == "empty":
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif cmd == "pop":
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())

