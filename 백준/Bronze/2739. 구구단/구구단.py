
n = int(input())

answer = ""
for i in range(1,10):
  answer += "{0} * {1} = {2}".format(n, i, n * i) + "\n"

print(answer)