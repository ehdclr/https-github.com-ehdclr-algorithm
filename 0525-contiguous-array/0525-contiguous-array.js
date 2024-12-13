/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    let sumMap = new Map();
    let maxLength = 0;
    let sum = 0;
    sumMap.set(0,-1);

    nums.forEach((v,i) =>{
        num = v;
        if(v == 0) num = -1;
        sum += num;
        if(sumMap.has(sum)){
            maxLength = Math.max(maxLength, i - sumMap.get(sum));
        } else{
            sumMap.set(sum,i)
        }
    })

    return maxLength;
};