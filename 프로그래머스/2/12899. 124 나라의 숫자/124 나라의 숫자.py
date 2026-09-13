def solution(n):
    
    answer = ""
    while n:
        n -= 1
        # 124중 하나 
        digit = "124"[n % 3]
        answer = digit + answer
        n //= 3
        
    return answer