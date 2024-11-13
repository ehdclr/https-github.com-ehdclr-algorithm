/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let set = new Set();
    let result = 0;

    nums.map((el)=>{
        if(set.has(el)){
            result = el;
        }
        else set.add(el)
    })

    return result;
};