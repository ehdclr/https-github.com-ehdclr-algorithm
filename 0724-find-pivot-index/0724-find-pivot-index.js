/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //TODO 피봇 왼쪽과 오른쪽 합이 같아야함 그 인덱스를 찾아야함
    let pivotIndex = 0 ;
    let prevPivotNum = 0;

    let leftSum = 0;
    let rightSum = nums.reduce((a,b)=> a+b);


    while(pivotIndex < nums.length){

        leftSum += prevPivotNum;
        rightSum -= nums[pivotIndex]
        
        if(leftSum == rightSum ) return pivotIndex
        prevPivotNum = nums[pivotIndex];
        pivotIndex ++;

    }
    return -1
};