from collections import Counter

N = input()

# 9를 6으로 바꿔서 처리
N = N.replace('9', '6')

counter = Counter(N)

# 각 숫자별로 필요한 세트 수 계산
max_sets = 0

for digit in '0123456789':
    if digit == '6':
        # 6과 9를 합쳐서 처리 (한 세트에 6이 2개 있음)
        needed_sets = (counter['6'] + 1) // 2  # 올림 처리
    else:
        # 나머지 숫자들 (한 세트에 각각 1개씩)
        needed_sets = counter[digit]
    
    max_sets = max(max_sets, needed_sets)

print(max_sets)