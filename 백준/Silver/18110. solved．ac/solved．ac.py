import sys
from functools import reduce

input = sys.stdin.readline

N = int(input())
arr = []
for _ in range(N):
    arr.append(int(input()))

arr.sort()

# 절사평균 30% (위아래 각 15%)
cnt = int(N * 15 / 100 + 0.5)  # 반올림을 명시적으로

# 절사평균
arr = arr[cnt:N-cnt] 

if arr:
    print(int(sum(arr) / len(arr) + 0.5))  # 반올림을 명시적으로
else:
    print(0)