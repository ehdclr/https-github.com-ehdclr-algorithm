def checkPalindrome(s):
    # reverse 했을때 같아야함
    return s == s[::-1]

def solution(s):
    start_idx = 0
    end_idx = start_idx + 1 # 투포인터로 먼저 집음
    n = len(s)
    ans = 1
    
    if len(s) == 1:
        return 1
    
    for start_idx in range(n - 1):
        for end_idx in range(start_idx + 1, n):
            if checkPalindrome(s[start_idx: end_idx +1]):
                ans = max((end_idx - start_idx + 1), ans)
                
    return ans
                



    
    # 앞 뒤를 뒤집어도 똑같은거 palindrome이라고 함
    # s를 주었을 때 부분문자열중 가장 긴 팰린드롬 
    
    
    # 길이가 짝수인 경우 홀수인경우를 나눠서 생각 해야함
    
    # 부분 문자열 -> 슬라이딩 윈도우
    
    
# abbaedad -> 4 그렇다면 양끝에서 줄여 나가는 식으로 해야지
# 근데 양쪽으로 줄여나가면 의미가 있나??
# 2500 의 자연수 그렇다면, 약 2000 으로 잡고 n^2까진 되는거같은데 