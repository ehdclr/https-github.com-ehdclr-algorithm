/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let leftIndex = 0; //0만 저장하는 포인터
    let rightIndex = nums.length -1; //2만저장하는 포인터

    let curIndex = 0 ; //현재 인덱스
    while(curIndex <= rightIndex){
        if(nums[curIndex] == 0){
            [nums[leftIndex], nums[curIndex]] = [nums[curIndex],nums[leftIndex]];
            leftIndex++;
            curIndex++
        } else if(nums[curIndex] == 2){
            [nums[rightIndex], nums[curIndex]] = [nums[curIndex], nums[rightIndex]];
            rightIndex--
        }
        else {
                curIndex++;
        }

    }

    return nums;
};