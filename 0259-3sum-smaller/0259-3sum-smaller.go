import "sort"

func threeSumSmaller(nums []int, target int) int {
    if len(nums) < 3 {
        return 0
    }

    // 정렬 필요
    sort.Ints(nums)
    
    count := 0
    
    for i := 0; i < len(nums)-2; i++ {
        left, right := i+1, len(nums)-1
        
        for left < right {
            sum := nums[i] + nums[left] + nums[right]

            if sum < target {
                // (nums[left], nums[right]) 사이 모든 조합이 유효
                count += right - left
                left++ // 더 큰 값 탐색
            } else {
                right-- // 더 작은 값 탐색
            }
        }
    }
    
    return count
}