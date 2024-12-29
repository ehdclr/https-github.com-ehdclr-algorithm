/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0]; // 현재 부분합
    let maxSum = nums[0];     // 최대 부분합

    for (let i = 1; i < nums.length; i++) {
        // 현재 요소를 포함하는 새로운 부분합 또는 시작점 재설정
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // 최대값 갱신
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

// 가장 큰 sum을 가진 subarray를 찾기 -> 그 subarray의 합을 찾기 
// subarr 관련 

// [-2,1,-3,4,-1,2,1,-5,4] 일 때 dp[0] 일때 가장 큰 숫자 4 
// dp[1]일때 dp[0]에서 왼쪽 숫자 혹은 오른쪽 숫자 

//원래는 정렬을 해서 O(nlog) 으로 정렬한다음에 두개의 포인터로 좁힌다음에 최고 수치를 구하는 방법이 있음 -> O(n^2) 방법임 -> 양의 숫자로 하는 방법도 있음

//문제에서 O(n) 분할정복으로 풀 수 있다함 

//브루트 포스는 O(n^3) 방법 

//subarray길이도 모르고, subarray의 value도 모르기때문에 최대값만 구하라고 함 -> 최적화 문제로 보게됨
// optimization문제는 bottomup으로 풀 수 있음 

