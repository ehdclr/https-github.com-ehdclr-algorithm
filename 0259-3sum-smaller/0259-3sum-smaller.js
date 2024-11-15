/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length < 3) return 0;

    nums.sort((a, b) => a - b); // 정렬
    let count = 0; // 결과 카운트

    for (let i = 0; i < nums.length - 2; i++) {
        // i를 기준으로 투 포인터 실행
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum < target) {
                // 모든 k > j에 대해 sum < target 성립
                count += (k - j);
                j++; // j 증가
            } else {
                k--; // 합이 크거나 같으면 k 감소
            }
        }
    }

    return count;
};

console.log(threeSumSmaller([-2, 0, 1, 3], 2)); // 출력: 2