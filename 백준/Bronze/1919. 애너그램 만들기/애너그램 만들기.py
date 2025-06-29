from collections import Counter

a = input()
b = input()

a_set = set(a)
b_set = set(b)

a_count = Counter(a)
b_count = Counter(b)

result = 0

# a에만 있는 문자들의 개수
for x in a_set - b_set:
    result += a_count[x]  # str(x) 불필요, x는 이미 문자열

# b에만 있는 문자들의 개수  
for y in b_set - a_set:
    result += b_count[y]  # b_count(str[y]) → b_count[y]로 수정

# 공통 문자들 중에서 개수가 다른 것들의 차이
for char in a_set & b_set:  # 교집합
    result += abs(a_count[char] - b_count[char])

print(result)