/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let leftValue = Infinity;
    let rightValue = -Infinity;

    //왼쪽에서 오른쪽으로 갈 때 깨지는부분중 최소를 찾기

    for(let i = 1; i < nums.length ;i++){
        if(nums[i-1] > nums[i]){
            leftValue = Math.min(leftValue, nums[i])
        }
    }
    //오른쪽에서 왼쪽으로 가는 방향의 깨지는 부분중 최대 부분
    for(let i = nums.length -2 ; i >=0 ;i--){
        if(nums[i] > nums[i+1]){
            rightValue = Math.max(rightValue, nums[i])
        }
    }
    let leftIdx = 0;
    //이제 여기서 딱 꺾이는 부분 찾으면됨
    while(leftIdx < nums.length && nums[leftIdx] <= leftValue){
        leftIdx++;
    }
    let rightIdx = nums.length -1
    while(rightIdx >= 0 && nums[rightIdx] >= rightValue){
        rightIdx--
    }

    return leftIdx < rightIdx ? rightIdx - leftIdx + 1 : 0
    
};