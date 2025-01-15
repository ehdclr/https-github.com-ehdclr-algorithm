/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    if(nums.length < 1) return -1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        let curNum = nums[mid];
        let nextNum = nums[mid+1]

        if(curNum < nextNum){
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return start;

};