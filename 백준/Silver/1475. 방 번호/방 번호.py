from collections import Counter

N = input().replace('9','6')

counter = Counter(N)
max_counts = 0

for c in N :
  if c == '6':
    max_counts = max(max_counts, (counter[c] + 1)//2)
  else:
    max_counts = max(max_counts, counter[c])


print(max_counts)