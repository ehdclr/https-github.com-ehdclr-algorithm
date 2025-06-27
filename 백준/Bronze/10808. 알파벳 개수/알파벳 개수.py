s = input()
freq = [0] * 26
for c in s: freq[ord(c) - ord('a')] += 1
print(*freq)