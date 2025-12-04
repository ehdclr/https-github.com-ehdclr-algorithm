import sys
# 티셔츠 S M L XL XXL XXXL 6가지  티셔츠는 같으 ㄴ사이즈 T장 묶음으로만 주문가능 

# 펜은 한 종류 P자루씩 묶음 혹은 한자루 

# 티셔츠는 남아도 되고 펜은 남거나 부족해서는 안되고 정확

# 펜을 기준으로 잡으면됨

#참가자수 N
N = int(input())

# 사이즈별 신청자수 
arr = list(map(int,input().split())) # 사람수는 23명 
# arr = [0,0,0,0,8,15
T,P = map(int,input().split())

#T장씩 몇묶음 줘야하는지 
# P자루씩 최대 몇묶음 펜을 한자루씩 몇 개 주문


# O(N) 수준밖에 안될거같은데 
# 

# 같은사이즈 T장만 묶음으로만 주문 
# P자루씩 묶음 혹은 한자루

# 티셔츠는 T가 나머지가 있는지 나머지가 있으면 count +1 남아됨
# 펜은 전체에서 P묶음으로나누고 , 남은 자루수
clothes = 0
pen = (N // P, N % P)

for i in arr:
  count = 0 
  
  if i <= T:
    if i == 0:
      continue
    count += 1
  else:
    # 더 크다면
    if i % T == 0:
      count += i // T
    else:
      count += (i//T) + 1
  clothes += count
  
print(clothes)
print(f'{pen[0]} {pen[1]}')