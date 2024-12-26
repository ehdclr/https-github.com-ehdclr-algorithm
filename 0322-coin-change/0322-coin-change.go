import "math"

func coinChange(coins []int, amount int) int {
    
    dp := make([]int, amount+1)
    for i := 0; i <= amount ;i++ {
        dp[i] = math.MaxInt32;
    }
    dp[0] = 0

    for i := 1  ; i <= amount ; i++ {
        //코인의 갯수만큼
        for _,coin := range coins {
            if i - coin >= 0 { //코인을 만들 수 있으면,
                dp[i] = min(dp[i], dp[i-coin]+1)
            }
        }
    }

    if dp[amount] == math.MaxInt32 {
        return -1
    }
    return dp[amount]
    
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}