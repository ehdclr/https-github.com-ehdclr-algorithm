import sys
from collections import defaultdict
from copy import deepcopy

# 넣어놓고 왼쪽 방향으로 한다 (역순) -> stack을 활용하자.
# 그리고 6 9 5 7 4 이렇게 했으니 4부터 보자
# 그럼 top = 4가되고 다른 스택에 저장해둠 -> stack1 =[6 9 5 7] stack2 = [4] stack1의 탑이 stack2의 top보다큼
# 그러면 len(stack1)을 출력  -> 4를 dict 4에 맞춰서 넣기 넣기 ->
# 2 -1 -> stack1 =[6 9 5 ]  stack2 = [7] 안크네? 그럼 5 pop 해서 stack2에 
# 2 -2 -> stack1 = [6 9] stack2 = [7 5] ->  5 는 그러면 len(stack1) 2개 그럼 dict에 됨
# 3 9 

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
stack1 = deepcopy(arr)
stack2 = []

default_dict = defaultdict(int) # 기본값 (0 반환)

while stack1:
    stack1_top = stack1.pop() # top 부분 기억해두기
    stack2.append(stack1_top)
    # stack2가 들어있다면, stack2의 탑과 stack1의 탑을 비교
    while stack2:
        if stack1 and stack1[-1] > stack2[-1]:
            default_dict[str(stack2[-1])] = len(stack1)
            stack2.pop()
        elif stack1 and stack1[-1] < stack2[-1]:
        #여기서 stack1이 다 벗겨지면, 빼기
            stack2.append(stack1.pop())
        else :
            stack2.pop()


#어차피 defaultdict썼기때문에 없더라도 0

for num in arr:
    print(default_dict[str(num)] ,end=" ")






