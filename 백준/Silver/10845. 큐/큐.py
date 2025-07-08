import sys

n = int(sys.stdin.readline())
queue = []
result = []

for _ in range(n):
    command = sys.stdin.readline().split()
    cmd = command[0]

    if cmd == "push":
        queue.append(int(command[1]))
    elif cmd == "pop":
        if len(queue) == 0:
            result.append(-1)
        else:
            # 수정 1: 큐는 FIFO이므로 맨 앞에서 제거
            result.append(queue.pop(0))
    elif cmd == "size":
        result.append(len(queue))
    elif cmd == "empty":
        if len(queue) == 0:
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

# 수정 2: 결과를 문자열로 변환하여 각 줄로 출력
print("\n".join(map(str,result)))