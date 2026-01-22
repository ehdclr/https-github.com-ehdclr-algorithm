# 문자열 폭발하면 문자열 사라지고 남은 문자열 합쳐짐 

# 남아있는 문자가 없는경우 FRULA

# 폭발 문자열은 같은 문자 두개 이상 포함 X

# stack문제 인듯 
# stack에 담아놓고 두개를 판단하고 bomb이 아니라면 

# edge 케이스 mirkoCvC4niz 이런 경우가 잇음 그러면 무조건적으로 stack에 넣는게 답이아님 
# 매번 stack에 쌓인 문자열끼리 비교해야함 
# mirCkovC4nizCC44
# stack [mirCk] 

s = list(input())
bomb = input()
bLen = len(bomb)
stack = []

startIdx = 0



# 인덱스를 가리킴 
for i in range(len(s)):
  # 분명 
  c = s[i] # 현재 문자열 
  stack.append(c)
  if stack and stack[-1] == bomb[bLen-1]: # 닫은 순간 
    if "".join(stack[len(stack) - bLen:len(stack)]) == bomb:
      del stack[len(stack) - bLen:len(stack)]
   

if stack:
  print("".join(stack))
else:
  print('FRULA')

# 마지막에 닫았을 때 , 
 


# stack.top 이 마지막과 같으면 그냥 pop이었음 