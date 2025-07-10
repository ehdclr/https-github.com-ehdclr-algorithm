import sys
from collections import deque

n = int(sys.stdin.readline())
q = deque()

result = []

for _ in range(n):
  command = sys.stdin.readline().split()
  cmd = command[0]

  if cmd == "push_front":
    q.appendleft(int(command[1]))
  elif cmd == "push_back":
    q.append(int(command[1]))
  elif cmd == "pop_front":
    if len(q) == 0:
      result.append(-1)
    else:
      result.append(q.popleft())
  elif cmd == "pop_back":
    if len(q) == 0:
      result.append(-1)
    else:
      result.append(q.pop())
  elif cmd == "size":
    result.append(len(q))
  elif cmd == "front":
    if len(q) == 0:
      result.append(-1)
    else:
      result.append(q[0])
  elif cmd == "back":
    if len(q) == 0:
      result.append(-1)
    else:
      result.append(q[-1])
  elif cmd == "empty":
    if len(q) > 0:
      result.append(0)
    else:
      result.append(1)

    


print("\n".join(map(str,result)))