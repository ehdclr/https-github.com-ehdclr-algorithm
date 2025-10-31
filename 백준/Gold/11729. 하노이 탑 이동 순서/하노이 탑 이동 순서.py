def recur(a, b, n):
    if n == 1:
        print(a, b)
        return
    
    recur(a, 6 - a - b, n - 1)  # n-1개를 보조 기둥으로
    print(a, b)                  # n번째 원판을 목적지로
    recur(6 - a - b, b, n - 1)  # n-1개를 목적지로

n = int(input())
print(2 ** n - 1)  # 총 이동 횟수
recur(1, 3, n)