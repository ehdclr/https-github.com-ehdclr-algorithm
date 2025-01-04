/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0; //왼쪽 합
    let rightSum = nums.reduce((a,b) => a + b);
    let prevNum = 0; // pivotIndex의 전 숫자
    
    // pivotIndex 기준으로 양옆의 합이 같아야하니까
    // Nums를 순회를 돌면서 lefSum 에 더하기 leftSum 에 pivotIndex의 숫자를 더한것과 rightSum 이 같다면, 됨

    //피봇의 인덱스
    for(let idx = 0 ; idx < nums.length ; idx++){
        leftSum += prevNum;
        rightSum -= prevNum;
        prevNum = nums[idx];
        if(leftSum + nums[idx] == rightSum) return idx;
    }

    return -1;
};

// pivot을 기준으로 양옆이 같아 질때, pivotIndex를 결과로 보여주면됨

//없다면, -1을 리턴 

//브루트 포스로 풀면 O(n ^2)으로 풀 수 있음.

//슬라이딩 윈도우 기법을 쓰면 됨 인덱스를 늘려나가면서 전체 합에서 먼저 빼면서 같아질 때, 리턴하면됨