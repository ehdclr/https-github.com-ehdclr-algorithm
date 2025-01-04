func sortColors(nums []int)  {
    l, r := 0, len(nums) - 1;
    curIndex :=0

    //l 이 0을 담을 인덱스 r이 2를 담을 인덱스

    for curIndex <= r {
        if nums[curIndex] == 0 {
            //0이라면 l이랑 스왑
            nums[l], nums[curIndex] = nums[curIndex], nums[l];
            l++;
            curIndex++;
        } else if nums[curIndex] == 2 {
            nums[r], nums[curIndex] = nums[curIndex], nums[r];
            r-- //스왑 한 뒤 1이나 0이 될 수도 있으므로 
        } else {
            curIndex++; //1은 그냥 넘어가기
        }
    }
}