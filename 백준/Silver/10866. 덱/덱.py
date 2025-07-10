import sys
from collections import deque

n = int(sys.stdin.readline())
q = deque()
result = []  # 이 줄이 빠져있었습니다!

commands = {
    "push_front": lambda x: q.appendleft(int(x)),
    "push_back": lambda x: q.append(int(x)),
    "pop_front": lambda _: result.append(q.popleft() if q else -1),
    "pop_back": lambda _: result.append(q.pop() if q else -1),
    "size": lambda _: result.append(len(q)),
    "empty": lambda _: result.append(0 if q else 1),
    "front": lambda _: result.append(q[0] if q else -1),
    "back": lambda _: result.append(q[-1] if q else -1)
}

for _ in range(n):
    parts = sys.stdin.readline().split()
    cmd = parts[0]
    arg = parts[1] if len(parts) > 1 else None
    commands[cmd](arg)

print('\n'.join(map(str, result)))