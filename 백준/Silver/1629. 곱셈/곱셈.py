a,b,c = map(int, input().split())


def recur(base,exp,mod):
  if exp == 0:
    return 1
  if exp == 1:
    return base % mod
  
  # 여기서 
  half = recur(base, exp // 2, mod)
  result = (half * half) % mod

  if exp % 2 == 1:
    result = (result * base) % mod
  return result

print(recur(a,b,c))