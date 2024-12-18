/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let dp = [1]; //초기 n == 1 일때 들어가니
    dp.push(2);
    
    if(n == 1) return dp[0]; //방법은 1스텝을 오르는 것 

    for(let i = 2 ; i < n ;i++){ 
        dp[i] = dp[i -1] + dp[i-2];
    }

    return dp[n-1];
    
};


//계단을 오르는 방법

//1스텝이나 2스텝을 갈 수 있음  

//3일때 [1,1,1] [1,2] [2,1]




// 이전 방법에서 가거나 한번을 더 1step을 더하거나 2 step을 더하면된다. 

//n번째 계단을 올라 올 수 있는 방법은 N-1번째에서 올라오거나 n-2번째에서 올라와야함 n-2번째를 올라오는건 f(n-2) + f(n-1)