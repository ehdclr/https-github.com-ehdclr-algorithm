func pivotIndex(nums []int) int {
    totalSum := 0
    leftSum := 0

    // Calculate the total sum of the array
    for _, v := range nums {
        totalSum += v
    }

    // Iterate through the array to find the pivot index
    for i, v := range nums {
        // Check if leftSum equals rightSum
        if leftSum == totalSum-leftSum-v {
            return i
        }
        leftSum += v
    }

    return -1
}