var findMaxLength = function(nums) {
    nums.forEach((v, i) => {
        if (v == 0) nums[i] = -1;
    });

    let sumMap = new Map();
    let sum = 0;
    let maxLength = 0;

    sumMap.set(0, -1); // 누적 합이 0인 경우를 처리

    nums.forEach((num, i) => {
        sum += num;
        if (sumMap.has(sum)) {
            maxLength = Math.max(maxLength, i - sumMap.get(sum));
        } else {
            sumMap.set(sum, i);
        }
    });

    return maxLength;
};