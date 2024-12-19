/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let curIndex =0;


    //TODO 0이 아닐때
    for(let idx = 0 ; idx < nums.length ; idx++){
        if(nums[idx] != 0){
            nums[curIndex] = nums[idx];
            curIndex++;
        }
    }

    //0이 아닌거 찾은 이후에 넣기 
    for(let i = curIndex ; i < nums.length ;i++){
        nums[i] = 0; 
    }

    return nums
};