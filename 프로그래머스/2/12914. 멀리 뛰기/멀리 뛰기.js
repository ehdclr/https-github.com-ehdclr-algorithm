function solution(n) {
    let dp = new Array(2001).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    // 4칸일 때 3칸으로 오른거 2칸으로 오른경우 둘중 하나 
    for(let i = 3; i <= n; i++){
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
        
    }
    return dp[n]
}

// console.log(solution(0))