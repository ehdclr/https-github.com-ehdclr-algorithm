/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()

    for(let i = 0; i <nums.length ;i++){
        let complete = target - nums[i];

        if(map.has(complete)){
            //전체에서 - 해당 숫자를 뺐을 때 이미 있다면, 그 수랑 합쳤을 때 target이 되므로 끝
            return [map.get(complete),i];
        }

        map.set(nums[i], i);

    }
    return []

};