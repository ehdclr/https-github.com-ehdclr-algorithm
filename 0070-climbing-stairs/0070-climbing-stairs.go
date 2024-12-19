func climbStairs(n int) int {
    dp := make([]int, n+1)
    dp[0] = 1;
    dp[1] = 1;
    

    //현재 계단을 오르는 방법은 n-1번째에서  (1칸올라오기) 올라오거나 n-2 번째에서 올라오는 방법 (2칸 올라오기)

    for i := 2 ; i <= n ; i++ {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n];
}