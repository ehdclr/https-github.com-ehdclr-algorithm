import sys
from collections import deque 

N = int(sys.stdin.readline())
count = 0

for _ in range(N):
  str = sys.stdin.readline().rstrip()
  stack = deque()

  for char in str:
    if stack and stack[-1] == char:
      stack.pop()
    else:
      stack.append(char)


  if not stack:
    count +=1

print(count)

