a =int(input())
b =int(input())
c =int(input())

s = str(a * b * c)

result = []
for i in range(10):
    result.append(s.count(str(i)))

print(*result)