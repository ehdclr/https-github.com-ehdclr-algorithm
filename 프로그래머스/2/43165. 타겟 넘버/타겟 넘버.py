def solution(numbers, target):
    count = 0
    
    def dfs(depth, current_sum):
        nonlocal count
        
        if depth == len(numbers):
            if current_sum == target:
                count += 1
            return
        
        # 현재 숫자를 더하는 경우
        dfs(depth + 1, current_sum + numbers[depth])
        # 현재 숫자를 빼는 경우
        dfs(depth + 1, current_sum - numbers[depth])
    
    dfs(0, 0)
    return count