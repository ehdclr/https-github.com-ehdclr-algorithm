# 그랜드 아레나 
# 웰컴키트 줌 

# 펜은 

# 티셔츠 묶음 t, 펜의 묶음수 p

# 펜이 남으면안되고, 티셔츠는 남아도됨
import sys
input = sys.stdin.readline

n =int(input())
arr = list(map(int,input().split()))
t,p = map(int,input().split())



ans_t = 0
ans_p = [0,0] # 자루수 한 자루
for x in arr:
  ans_t += (x // t) + 1 if  x %  t != 0 else  x // t

ans_p[0] = n // p
ans_p[1] = n % p 

print(ans_t)
print(*ans_p)
