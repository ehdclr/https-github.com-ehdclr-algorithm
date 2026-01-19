import sys
import heapq
input = sys.stdin.readline
# v1,v2 정점 번호가 주어짐 

# v1과 v2에서 출발하면될거같음

N, E = map(int,input().split())

links =[[] for _ in range(N+1)]
INF = 1000 * 200000

for _ in range(E):
  a,b,c = map(int,input().split())
  links[a].append((b,c))
  links[b].append((a,c))

c1 = [INF] * (N+1) # v1 에서 출발
c2 = [INF] * (N+1) # v2에서 출발 

# 1번 정점에서 N번 정점으로 이동 

v1,v2 = map(int,input().split())
q1 = []
heapq.heappush(q1,(0,v1))
c1[v1] = 0

q2 = []
heapq.heappush(q2,(0,v2))
c2[v2] = 0

while q1:
  c,cur = heapq.heappop(q1)
  
  if c < c1[cur]:
    continue

  for nxt,cost in links[cur]:
    if c1[nxt] > c1[cur] + cost:
      c1[nxt] = c1[cur] + cost
      heapq.heappush(q1,(c1[nxt],nxt))

while q2:
  c,cur = heapq.heappop(q2)
  
  if c < c2[cur]:
    continue

  for nxt,cost in links[cur]:
    if c2[nxt] > c2[cur] + cost:
      c2[nxt] = c2[cur] + cost
      heapq.heappush(q2,(c2[nxt],nxt))


ans = 0 

path1 = c1[1] + c1[v2] + c2[N]
path2 = c2[1] + c2[v1] + c1[N]

ans = min(path1,path2)


if ans >= INF:
  print(-1)
else:
  print(ans)

