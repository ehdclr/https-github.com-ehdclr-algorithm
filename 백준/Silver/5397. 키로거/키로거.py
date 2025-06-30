import sys

# 알파벳 대무자, 소문자, 숫자 백스페이스, 화살표

# 커서 앞에 글자 존재하면 지우고 (맨앞이라면 안지움)

# - 면 백스페이스

# 화살표 < > 

n = int(sys.stdin.readline().rstrip())



for _ in range(n):
  s = sys.stdin.readline().strip()
  
  left_stack = []
  right_stack = []

  for char in s:
    if char == "<":
      if len(left_stack) > 0:
        right_stack.append(left_stack.pop())
    elif char == ">":
      if len(right_stack) > 0:
        left_stack.append(right_stack.pop())
    elif char == "-":
      if len(left_stack) > 0:
        left_stack.pop()
    else:
      left_stack.append(char)

  result = left_stack + right_stack[::-1]
  print("".join(result))



  

