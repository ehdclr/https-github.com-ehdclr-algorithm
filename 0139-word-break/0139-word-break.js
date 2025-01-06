var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = new Array(n + 1).fill(false); 
    dp[0] = true; // 빈 문자열은 항상 true

    let wordSet = new Set(wordDict); // 빠른 탐색을 위해 Set 사용

    for (let i = 1; i <= n; i++) { // i는 1부터 n까지 검사
        for (let j = 0; j < i; j++) { // j는 i 이전까지 검사
            if (dp[j] && wordSet.has(s.slice(j, i))) { // j까지 가능하고 j~i가 단어인지 확인
                dp[i] = true;
                break; // 가능한 경우 더 이상 탐색 불필요
            }
        }
    }

    return dp[n]; // 최종 결과 반환
};

//set으로 푸는 방법