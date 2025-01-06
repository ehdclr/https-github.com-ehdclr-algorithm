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

// var wordBreak = function(s, wordDict){
//     let n = s.length;
//     let dp = new Array(n+1).fill(false);
//     dp[0] = true // 빈문자열은 항상 true

//     for(let i = 0 ; i <  n; i++){
//         if(!dp[i]) continue; // 바로 이전이니까 

//         for(let j = i + 1 ; j < n ; j++ ) { //j는 다음 dp에 담을 그릇 즉 , 다음 사이즈를 바텀 업으로 확인
//             if(dp[j] && wordDict.includes(s.slice(i,j))) { 
//                 dp[j] = true
//                 break
//             }
//         }

//     }

//     return dp[n]

// }