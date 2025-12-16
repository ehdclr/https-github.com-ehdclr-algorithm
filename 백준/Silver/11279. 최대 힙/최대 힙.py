import sys
import heapq

input = sys.stdin.readline

N = int(input())
heap = []
answer = []

for _ in range(N):
    x = int(input())
    
    if x == 0:
        if heap:
            answer.append(-heapq.heappop(heap))
        else:
            answer.append(0)
    else:
        heapq.heappush(heap, -x)  # 최대 힙을 위해 음수로 저장

print('\n'.join(map(str, answer)))