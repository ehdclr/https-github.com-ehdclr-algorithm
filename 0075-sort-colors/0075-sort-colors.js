/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     //O(nlogn)으로 푸는 단순한 방법은 정렬
//     return nums.sort();
// };

//TODO O(n)으로 푸는방법
var sortColors = function(nums){
    let l = 0; //0 만 담는 인덱스
    let r = nums.length - 1; //2만 담는 인덱스

    let curIndex = 0;
    while(curIndex <= r){
        if(nums[curIndex] == 0){
            [nums[curIndex],nums[l]] = [nums[l],nums[curIndex]];
            l++
            curIndex++
        } else if(nums[curIndex] == 2){
            [nums[r], nums[curIndex]] = [nums[curIndex], nums[r]];
            r--
        } else {
            curIndex++;
        }
    }

}