from collections import Counter

N = int(input())
for _ in range(N):
    a, b = input().split()
    if Counter(a) == Counter(b):
        print("Possible")
    else:
        print("Impossible")