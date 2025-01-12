/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let visited = new Set()
    let result = []

    function bt(index, array){
        if(index == nums.length){
            result.push([...array])
            return;
        }
        for(let i = 0 ; i < nums.length ; i++ ){
            if(visited.has(nums[i])) continue;
            visited.add(nums[i]);
            array.push(nums[i])
            bt(index+1, array)
            visited.delete(nums[i]);
            array.pop()
        }
    }
    bt(0,[])

    return result;
};

