# 분해합은 N과 N을 이루는 각 자리수의 합 
# M의 분해합이 N인 경우 

# M은 N의 생성자

# 245의 분해합 = 245 + 2 + 4 + 5 = 256

# 가장 작은 생성자 

# 생성자가 없을 수도 있다.
# 생성자가 여러개일 수도 있다. 

# O(N**2)까지 가능

N = int(input())
#N의 분해합도 



arr = []

# 배열을 일일이 만들어서 할 수도 있음 생성자 
# 하나씩 구해서 할 수도 있다.

# 10의 분해합 1 
for i in range(N+1):
    numStr = str(i)
    sum = i
    for n in numStr:
      sum += int(n) # 각자리수 더하기
    # 다돌았으면, 해당 생성자로 만들어진 list에 추가
    if sum == N:
      arr.append(i)
print(0 if not arr else min(arr))



  
      



