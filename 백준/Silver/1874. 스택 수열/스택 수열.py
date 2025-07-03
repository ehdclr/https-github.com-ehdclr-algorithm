import sys

n = int(sys.stdin.readline())
target = [int(sys.stdin.readline()) for _ in range(n)]

curr = 1
stack = []
result = []

for num in target:
  
  while curr <= num:
    result.append("+")
    stack.append(curr)
    curr += 1
  # 늘렸고
  if stack[-1] == num:
    result.append("-")
    stack.pop()
  else:
    print("NO")
    exit()

for op in result:
  print(op)

