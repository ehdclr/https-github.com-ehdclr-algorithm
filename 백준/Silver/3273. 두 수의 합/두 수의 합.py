# 두 수의 함
N = int(input())
arr = list(map(int, input().split()))
x = int(input())

new_set = set(arr)

result = 0

for i in arr:
  target = x - i

  if target in new_set and i < target:
    result +=1

print(result)