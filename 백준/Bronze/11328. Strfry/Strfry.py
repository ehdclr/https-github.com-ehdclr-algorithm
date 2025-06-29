
N = int(input())

for _ in range(N):
    a, b = input().split()
    
    # 문자열 길이가 다르면 불가능
    if len(a) != len(b):
        print("Impossible")
        continue
    
    # 정렬해서 비교
    if sorted(a) == sorted(b):
        print("Possible")
    else:
        print("Impossible")