def solution(N, stages):
    
    stages.sort()
    ans = []
    for i in range(1,N+1):
        # 1이라면
        fail_count = 0
        total_count = 0
        for stage in stages:
            if stage == i:
                fail_count += 1
            if stage >= i:
                total_count += 1
        
        if total_count != 0:
          ans.append([i, fail_count / total_count])
        else: 
          ans.append([i,0])
    
    ans.sort(key= lambda x : (x[1],-x[0]), reverse=True)
    result = []
    
    for x in ans:
        result.append(x[0])
    print(f'실패율을 포함한 [stage, 실패율] : {ans}')
    
    return result