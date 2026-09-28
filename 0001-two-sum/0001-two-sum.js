/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();

    for(let i =0 ; i < nums.length ; i++){
        const x = nums[i], other = target - x;
        if(mp.has(other)) return [mp.get(other), i];
        if(!mp.has(x)) mp.set(x,i);
    }
    return [];
};