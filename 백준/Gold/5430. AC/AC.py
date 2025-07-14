import sys
from collections import deque

T = int(sys.stdin.readline())

for _ in range(T):
    p = sys.stdin.readline().strip()  # 함수 문자열
    n = int(sys.stdin.readline())
    
    # 배열 파싱
    arr_str = sys.stdin.readline().strip()
    if n == 0:
        arr = []
    else:
        arr = arr_str[1:-1].split(',')  # [와 ]를 제거하고 쉼표로 분리
    
    # deque로 변환
    dq = deque(arr)
    
    # 뒤집힌 상태인지 추적
    is_reversed = False
    error = False
    
    # 명령어 실행
    for cmd in p:
        if cmd == 'R':
            is_reversed = not is_reversed
        elif cmd == 'D':
            if len(dq) == 0:
                error = True
                break
            
            if is_reversed:
                dq.pop()  # 뒤집힌 상태면 뒤에서 제거
            else:
                dq.popleft()  # 정상 상태면 앞에서 제거
    
    # 결과 출력
    if error:
        print("error")
    else:
        if is_reversed:
            result = list(reversed(dq))
        else:
            result = list(dq)
        
        print('[' + ','.join(result) + ']')