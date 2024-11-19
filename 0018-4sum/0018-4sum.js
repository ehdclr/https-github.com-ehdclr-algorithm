/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b); // 오름차순 정렬
    const result = [];

    for (let startIndex = 0; startIndex < nums.length - 3; startIndex++) {
        // 중복 제거
        if (startIndex > 0 && nums[startIndex] === nums[startIndex - 1]) continue;

        for (let endIndex = startIndex + 1; endIndex < nums.length - 2; endIndex++) {
            // 중복 제거
            if (endIndex > startIndex + 1 && nums[endIndex] === nums[endIndex - 1]) continue;

            let i = endIndex + 1;
            let j = nums.length - 1;

            while (i < j) {
                const sum = nums[startIndex] + nums[endIndex] + nums[i] + nums[j];

                if (sum < target) {
                    i++;
                } else if (sum > target) {
                    j--;
                } else {
                    result.push([nums[startIndex], nums[endIndex], nums[i], nums[j]]);
                    // 중복 제거
                    while (i < j && nums[i] === nums[i + 1]) i++;
                    while (i < j && nums[j] === nums[j - 1]) j--;
                    i++;
                    j--;
                }
            }
        }
    }

    return result;
};