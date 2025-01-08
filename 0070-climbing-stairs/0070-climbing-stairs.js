/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(46).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    

    for(let i = 2 ; i <= 46 ; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n+1]
};

//아래 2층에서 올라오는 방법 
// 아래 1층에서 올라오는 방법 f(n)  = f(n-1) + f(n-2)
//memoization 사용