import sys
sys.setrecursionlimit(100000)  # 이거 추가!
input = sys.stdin.readline

N, M = map(int, input().split())
p = [i for i in range(N+1)]

def find(u):
    if p[u] != u:
        p[u] = find(p[u])
    return p[u]

def union(x, y):
    r1 = find(x)
    r2 = find(y)
    if r1 != r2:
        p[r1] = r2

for _ in range(M):
    cmd, a, b = map(int, input().split())
    if cmd == 0:
        union(a, b)
    else:
        if find(a) == find(b):
            print('YES')
        else:
            print('NO')