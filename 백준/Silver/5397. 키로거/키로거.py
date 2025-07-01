import sys

n = int(sys.stdin.readline().strip())

for _ in range(n):
  s = list(sys.stdin.readline().strip())

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
    
  result = left_stack + list(reversed(right_stack))
  print("".join(result))



