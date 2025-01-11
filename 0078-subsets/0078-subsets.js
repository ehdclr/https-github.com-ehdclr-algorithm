/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let result = [];

    function dfs(index, array){
        
        result.push([...array])


        for(let idx = index ; idx < nums.length ;idx++ ){
            array.push(nums[idx])
            dfs(idx + 1,array)
            array.pop()
        }
    }

    dfs(0,[]);
    return result
};