def solution(s):
    stack = []
    # 괄호가 짝지어 졌다는 것 
    # s는 ( )로만 주어짐 
    # stack 에 남아있으면, False 처리하면되겠군 짝지어서 하고
    for char in s:
        if char == "(":
            stack.append(char)
        else: 
            # ) 일 때 ) 가 먼저 들어갈 수도 있기 때문에
            # stack이 있고, (가 top이라면
            if stack and stack[-1] == "(":
                stack.pop() # pop 을 해버려라
            elif not stack: 
                stack.append(')')
                
    if stack:
        return False
    
    return True
                