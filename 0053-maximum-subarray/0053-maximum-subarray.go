func maxSubArray(nums []int) int {
    currentSum := nums[0]
    maxSum := nums[0];

    for i := 1; i < len(nums) ; i++ {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(currentSum , maxSum);
    }   

    return maxSum
}

func max(a,b int) int {
    if a > b {
        return a
    } else {
        return b
    }
}