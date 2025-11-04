def solution(arr1, arr2):
    #행렬의 곱
    a, b = len(arr1), len(arr1[0])
    c, d = len(arr2), len(arr2[0])
    
    matrix = [[0] * d for _ in range(a)]  
    
    for i in range(a):
        #행에서 곱한다음에 0행이면 arr2는 0열을 곱해야하니까
        for j in range(d):
            for k in range(b):
                matrix[i][j] += arr1[i][k] * arr2[k][j]
    
    return matrix
            
            
            
            
    
    
