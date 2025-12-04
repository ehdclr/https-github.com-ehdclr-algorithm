import math

N = int(input())
nums = list(map(int,input().split()))

def isPrime(n):
  if n == 1:
    return False

  if n == 2:
    return True
  
  if n % 2 == 0:
    return False
  
  for i in range(2, math.floor(n**0.5) + 1):
    if n % i == 0:
      return False
  return True

ans = 0
for i in nums:
  if isPrime(i):
    ans += 1

print(ans)
