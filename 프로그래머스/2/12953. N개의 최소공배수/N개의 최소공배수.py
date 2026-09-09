import math

def solution(arr):
    ans = arr[0] 
    
    for i in range(1,len(arr)):
        ans = math.lcm(ans, arr[i])
        
    return ans