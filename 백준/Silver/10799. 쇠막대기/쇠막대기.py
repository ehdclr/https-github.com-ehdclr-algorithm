s = input().strip()

stack = 0 # 쌓여있는 쇠막대기
pieces = 0 #잘린 조각의 총 개수
i = 0 # 인덱스

while i < len(s):
  if s[i] == "(":
    #다음문자가 바로 ) 이면 레이저
    if i + 1 < len(s) and s[i+1] == ")":
      #레이저
      #현재 쌓인 막대기들을 모두 자름 
      pieces += stack
      i += 2
    else:
      stack +=1
      i +=1

  else:
    stack -=1
    pieces +=1
    i +=1
    
print(pieces)