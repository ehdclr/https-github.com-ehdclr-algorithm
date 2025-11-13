function solution(s) {
    if (s.length < 2) return s.length;
    
    let maxLen = 1;
    
    // 각 위치를 중심으로 확장
    for (let i = 0; i < s.length; i++) {
        // 홀수 길이 팰린드롬 (중심이 1개)
        let len1 = expandAroundCenter(s, i, i);
        // 짝수 길이 팰린드롬 (중심이 2개)
        let len2 = expandAroundCenter(s, i, i + 1);
        
        maxLen = Math.max(maxLen, len1, len2);
    }
    
    return maxLen;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1; // 길이 반환
}