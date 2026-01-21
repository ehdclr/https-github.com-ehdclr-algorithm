from collections import deque

N = int(input())

arr = [[] for _ in range(N+1)]
for _ in range(N-1):  # ✅ N-1개의 간선
  a, b, c = map(int, input().split())
  arr[a].append((b, c))
  arr[b].append((a, c))

def bfs(start):
  q = deque([start])
  visited = [False] * (N+1)
  visited[start] = True
  dist = [0] * (N+1)
  
  while q:
    cur = q.popleft()
    
    for nxt, cost in arr[cur]:
      if visited[nxt]:
        continue
      
      dist[nxt] = dist[cur] + cost
      visited[nxt] = True
      q.append(nxt)
  
  return dist

# 1단계: 1번에서 가장 먼 노드 찾기
dist1 = bfs(1)
farthest = dist1.index(max(dist1))

# 2단계: 가장 먼 노드에서 다시 가장 먼 거리 구하기
dist2 = bfs(farthest)
print(max(dist2))