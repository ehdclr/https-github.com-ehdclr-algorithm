import sys

n = int(sys.stdin.readline())

target = [int(sys.stdin.readline()) for _ in range(n)]

stack = []
operations = []
curr = 1

for num in target:
    
    while curr <= num:
        # 만약에 num 보다 작은경우
        stack.append(curr)
        operations.append("+")
        curr += 1

    if stack and stack[-1] == num:
        stack.pop()
        operations.append("-")
    else:
        print("NO")
        exit()

for op in operations:
    print(op)
