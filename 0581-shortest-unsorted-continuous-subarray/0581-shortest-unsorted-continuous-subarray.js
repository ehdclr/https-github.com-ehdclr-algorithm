/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    

    let leftNum = Infinity;
    let rightNum = -Infinity; 

    for(let i = 1; i < nums.length ;i++){
        if(nums[i-1] > nums[i]){ //꺾이는 부분을 찾아서 해당 값에서 더 작은 값을 찾아내야함 거기서부터 시작 -> 계속 커지는 배열이라는 가정하에
            leftNum = Math.min(leftNum,nums[i])
        }
    }

    for(let i = nums.length - 2; i >= 0 ;i--){
        if(nums[i] > nums[i+1]){
            rightNum = Math.max(rightNum, nums[i])
        }
    }

    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    //꺾인 부분보다 큰부분이 있으면, 거기서 꺾인부분의 정점
    while(leftIdx < nums.length && nums[leftIdx] <= leftNum){
        leftIdx++
    }

    while(rightIdx >= 0  && nums[rightIdx] >= rightNum){
        rightIdx--
    }

    return leftIdx < rightIdx ? rightIdx - leftIdx + 1 : 0
};