function solution(n, money) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1; 
    
    for(const coin of money){
        for(let i = coin ; i < n +1 ; i++ ){
            dp[i] += dp[i - coin]; // 기존 거에 더해야하는 방식
            dp[i] %= 1000_000_007;
        }
    }
    return dp[n]
}

//