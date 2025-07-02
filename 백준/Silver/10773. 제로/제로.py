import sys

# 잘못된 수를 부를 때 마다 0을 외침

k = int(sys.stdin.readline())

# 0일 경우 가장 최근의 쓴 수를 지움
stack = []

for _ in range(k):
    n = int(sys.stdin.readline())
    if n == 0:
        if len(stack) > 0:
            stack.pop()
        continue
    else:
        stack.append(n)

print(sum(stack))