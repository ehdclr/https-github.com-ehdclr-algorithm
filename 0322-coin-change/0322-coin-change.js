var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 금액 0은 동전 0개로 만들 수 있음.

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) { // 현재 동전으로 만들 수 있는 경우
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};