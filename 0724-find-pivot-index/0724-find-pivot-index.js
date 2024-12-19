/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivotIndex = 0 ; //피봇 인덱스를 정하고 ,  피봇 1부터 시작
    let prevPivotNum = 0; //피봇 이전 숫자 초기화 -> 맨처음에는 아무 숫자도 없으니

    let leftSum = 0; //피봇왼쪽 합 초기화
    let rightSum = nums.reduce((a,b) => a+b)  //오른쪽 합 -> 전체합으로 초기화  


    for( ; pivotIndex < nums.length ;pivotIndex++){
        leftSum += prevPivotNum;
        rightSum -= nums[pivotIndex];

        if(leftSum == rightSum) return pivotIndex;

        prevPivotNum = nums[pivotIndex]; // 피봇 이전 숫자 업데이트

    }

    return -1;
};