from collections import Counter

N = int(input())

for i in range(N):
  a, b = input().split()
  a_counter = Counter(a)
  b_counter = Counter(b)

  if a_counter != b_counter:
    print('Impossible')
  else:
    print('Possible')
