import sys
from collections import deque

N = int(sys.stdin.readline())
result = []
for _ in range(N):
  stack = deque()
  str = sys.stdin.readline().rstrip()

  for char in str:
    if char == "(":
      stack.append(char)
    elif char == ")":
      if stack and stack[-1] == "(":
        stack.pop()
      else:
        stack.append(char)

  
  if stack:
    result.append("NO")
  else:
    result.append("YES")

print("\n".join(result))
  