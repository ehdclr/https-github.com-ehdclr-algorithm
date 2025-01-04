func sortColors(nums []int) {
    l, r := 0, len(nums)-1
    curIndex := 0

    for curIndex <= r {
        if nums[curIndex] == 0 {
            // 0을 왼쪽으로 이동
            nums[l], nums[curIndex] = nums[curIndex], nums[l]
            l++
            curIndex++
        } else if nums[curIndex] == 2 {
            // 2를 오른쪽으로 이동
            nums[r], nums[curIndex] = nums[curIndex], nums[r]
            r--
        } else {
            // 1은 그대로 두고 진행
            curIndex++
        }
    }
}