/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let prevMin = nums[0] // 이전 값들 min
    let prevMax = nums[0] // 이전 값 max
    let max = nums[0];

    for(let i = 1 ; i < nums.length ; i++){
        
        //dp<min>(n) = min(dp<min>(n-1)  * nums[n] , dp<max>(n-1) * nums[n] , nums[n]) // 현재값을 이어진게 최소가 될수도, // 최대값에 현재값을 곱하면 최ㅏ소가 될수도 있고, 안이어진다고하면 현재값만 최소가 될 수도 있음 Max도 마찬가지임
        let minCurrent = Math.min(nums[i], prevMin * nums[i]);
        minCurrent = Math.min(minCurrent, prevMax * nums[i]);
        let maxCurrent = Math.max(nums[i], prevMin * nums[i]);
        maxCurrent = Math.max(maxCurrent, prevMax * nums[i]);

        prevMin = minCurrent;
        prevMax = maxCurrent;

        max = Math.max(max, maxCurrent);
    };
    return max;
};

//integer nums subArray 32bit Integer //가장 큰 곱을가진 부분 배열

//[-5,3,-2,4]



//투포인터로도 풀 수 있음 ..

//현재 숫자를 새로 추가할 때, 현재값만으로 할지 , 이전 값을 붙여서 할지 , 

// [-5 ] , 3, -5,3, -2 //이전거랑 곱해봐야 의미없고, 끊긴다. 이전의 문제가 더 큰문제를 해결해주는게 아님
// bottom up 방식으로 푼다면, 

//f(n) = max(cur, cur  )