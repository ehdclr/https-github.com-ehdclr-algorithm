func moveZeroes(nums []int)  {
    // 0을 끝으로 옮김moveZeroes

    startIndex := 0 

    for i := 0 ; i < len(nums) ; i++ {
        if nums[i] != 0 {
            nums[startIndex] = nums[i]
            startIndex++;
        }
    }

    for startIndex < len(nums) {
        nums[startIndex] = 0;
        startIndex++;
    }

}