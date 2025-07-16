import sys

while True:
    line = sys.stdin.readline().rstrip()
    if line == ".":
        break
    
    stack = []
    is_valid = True
    
    for c in line:
        if c == "[" or c == "(":
            stack.append(c)
        elif c == "]" or c == ")":
            if not stack:  # 스택이 비어있으면
                is_valid = False
                break
            
            if stack[-1] == "[" and c == "]":
                stack.pop()
            elif stack[-1] == "(" and c == ")":
                stack.pop()
            else:  # 매칭되지 않으면
                is_valid = False
                break
    
    # 스택에 남은 괄호가 있거나 중간에 실패했으면 no
    if stack or not is_valid:
        print("no")
    else:
        print("yes")