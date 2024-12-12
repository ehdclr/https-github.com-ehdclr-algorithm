
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0; // 현재 누적 합
    let sumMap = new Map(); // 누적 합을 저장하는 해시맵
    sumMap.set(0, 1); // 초기값: 빈 배열을 처리하기 위해 0의 개수를 1로 설정

    for (let num of nums) {
        sum += num; // 현재 누적 합 계산

        // 누적 합에서 k를 뺐을 때의 값이 해시맵에 있다면, 그 개수만큼 서브어레이가 존재
        let targetSum = sum - k;
        if (sumMap.has(targetSum)) {
            count += sumMap.get(targetSum);
        }

        // 현재 누적 합을 해시맵에 추가 (이미 있으면 개수 증가)
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }

    return count;
};