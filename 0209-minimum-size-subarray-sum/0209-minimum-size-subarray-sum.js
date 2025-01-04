/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    //하나의 포인터를 두고 왼쪽에서 줄여 나가는 식으로 해야함

    // 포인터에서 왼쪽 포인터를 두고 줄이는 방법은 O(n  * n ) O(n^2) 으로 푸는 방법
    let leftIndex = 0;
    let sum = 0;
    let minLen = Infinity;

    for(let idx = 0 ; idx < nums.length ; idx++){
        sum += nums[idx];

        while(sum >= target){
            minLen = Math.min(minLen, idx - leftIndex + 1);
            sum -= nums[leftIndex];
            leftIndex++;
        }
    }

    if (minLen == Infinity) return 0;
    

    return minLen

};

// 양수의 숫자만 있는 경우 target과 같은 가장 적은 길이를 가진 subArray를 가져야함
//슬라이딩 윈도우 기법
