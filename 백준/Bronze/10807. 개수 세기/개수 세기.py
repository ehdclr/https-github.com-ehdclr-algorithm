n = int(input())
arr = list(map(int,input().split()))
v = int(input()) #찾으려는 정수 v -100 < v < 100 -> N^3 걸려도 상관 없음 브루트 포스 가능

print(arr.count(v))