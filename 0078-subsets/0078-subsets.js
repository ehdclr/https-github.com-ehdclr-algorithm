/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    //가능한 모든 경우의 수
    let result = []

    function bt(depth, selected){
        result.push([...selected])
        for(let i = depth ; i < nums.length ;i++){
            selected.push(nums[i]);
            bt(i + 1,selected)
            selected.pop()

        }

    }
    bt(0,[])
    
    return result
};