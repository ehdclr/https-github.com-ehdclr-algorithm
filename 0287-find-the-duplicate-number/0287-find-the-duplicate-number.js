/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {};

    let result = 0;
    nums.map((el)=>{
        if(!obj[el]) obj[el] =1;
        else{
            result = el;
        }
    })


    return result;
};