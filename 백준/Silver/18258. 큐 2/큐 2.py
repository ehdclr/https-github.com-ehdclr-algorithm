import sys
from collections import deque

queue = deque()
result = []
n = int(sys.stdin.readline())

for _ in range(n):
  command = sys.stdin.readline().split()
  cmd = command[0]

  if cmd == "push":
    queue.append(int(command[1]))
  elif cmd == "pop":
    if len(queue) == 0 :
      result.append(-1)
    else:
      result.append(queue.popleft())
  elif cmd == "size":
    result.append(len(queue))
  elif cmd == "empty":
    if len(queue) == 0 :
      result.append(1)
    else:
      result.append(0)
  elif cmd == "front":
    if len(queue) == 0:
      result.append(-1)
    else:
      result.append(queue[0])
  elif cmd == "back":
    if len(queue) == 0:
      result.append(-1)
    else:
      result.append(queue[-1])


print("\n".join(map(str,result)))