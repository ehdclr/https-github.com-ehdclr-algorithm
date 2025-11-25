function solution(s) {
    let max = 1;
    
    // 각 위치를 중심으로 확장
    for (let i = 0; i < s.length; i++) {
        // 홀수 길이 팰린드롬
        let len1 = expandAroundCenter(s, i, i);
        // 짝수 길이 팰린드롬
        let len2 = expandAroundCenter(s, i, i + 1);
        max = Math.max(max, len1, len2);
    }
    
    return max;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}