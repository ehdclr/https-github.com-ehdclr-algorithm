def solution(nums):
    # set으로 푸는데, N // 2 했을때 더적은걸로 해야함
    s = set(nums)
    n = len(nums) // 2
    return min(len(list(s)), n)
