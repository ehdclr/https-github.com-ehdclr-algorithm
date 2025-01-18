/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let n = nums.length;
    let startIdx = -1;
    let endIdx = -1;
    let maxSeen = -Infinity;
    let minSeen = Infinity;

    // 오른쪽에서 왼쪽으로 최소값 추적
    for (let i = 0; i < n; i++) {
        if (nums[i] < maxSeen) {
            endIdx = i;
        } else {
            maxSeen = nums[i];
        }
    }

    // 왼쪽에서 오른쪽으로 최대값 추적
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > minSeen) {
            startIdx = i;
        } else {
            minSeen = nums[i];
        }
    }

    // 정렬되지 않은 구간의 길이를 계산
    return startIdx === -1 ? 0 : endIdx - startIdx + 1;
};