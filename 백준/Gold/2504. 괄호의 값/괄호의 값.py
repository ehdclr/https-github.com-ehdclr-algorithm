from collections import deque

s = input()
dq = deque()
result = 0
temp = 1
is_valid = True

for i in range(len(s)):
    if s[i] == "(":
        dq.append(s[i])
        temp *= 2
    elif s[i] == "[":
        dq.append(s[i])
        temp *= 3
    elif s[i] == ")":
        if not dq or dq[-1] != "(":
            is_valid = False
            break
        if s[i-1] == "(":
            result += temp
        dq.pop()
        temp //= 2
    elif s[i] == "]":
        if not dq or dq[-1] != "[":
            is_valid = False
            break
        if s[i-1] == "[":
            result += temp
        dq.pop()
        temp //= 3

if is_valid and not dq:
    print(result)
else:
    print(0)