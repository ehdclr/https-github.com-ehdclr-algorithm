import sys
from collections import deque

# 큐의 크기 n과 뽑아내려는 수으 개수 m

# 1 2 3 을 뽑아낸다 
n,m = map(int, sys.stdin.readline().split())
target = map(int,sys.stdin.readline().split())
q = deque(range(1,n+1))

#뽑는데 움직이는데 좌우가 더 짧은 곳에 움직여야함 오른쪽으로 움직이는데 앞으로 가는데 2칸이라면
# 3칸을 움직여야함 왼쪽은 6칸이라면 6번 움직이면됨 

count = 0

#결과가 같아질 때 까지 
for target_num in target: 
    #타겟 숫자가 맨앞에 와야함
        # 앞에 올때까지 움직이는거 
        #왼쪽이 긴지 오른쪽이 긴지 비교
        # 현재 상태 
        left = q.index(target_num)
        right = len(q) - q.index(target_num)

        #만약에 왼쪽이 짧다면 
        if left < right:
            while q[0] != target_num:
                  q.append(q.popleft())
                  count +=1
        else:
            while q[0] != target_num:
                  q.appendleft(q.pop())
                  count +=1
        q.popleft()

print(count)
                  
            

  
  
    
  