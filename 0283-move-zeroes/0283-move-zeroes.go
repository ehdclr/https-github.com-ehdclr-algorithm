func moveZeroes(nums []int)  {
    // 0 이 아닌 index를 저장할 포인터 
    curIndex := 0 ;

    for idx := 0 ; idx < len(nums) ; idx++ {
        if nums[idx] != 0 {
            nums[curIndex] = nums[idx] // 그러면 인덱스 0부터 0아닌 수를 넣게됨
            curIndex++
        }
    }

    for i := curIndex ; i < len(nums) ; i++ {
        nums[i] = 0;
    }

}

