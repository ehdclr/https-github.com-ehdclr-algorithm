/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumSmaller = function(nums, target) {
    if(nums.length < 3) return 0;
    //target보다 작은 수들을 
    nums.sort((a,b) => a-b)
    let result = 0;
    for(let i = 0 ; i <nums.length -2;i++){
        //기준이 되는 기준점
        let j = i+1;
        let k = nums.length - 1;
        while(j < k ){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum < target){
               result += k -j
               j++;
            }
            else{
                k--
            }
        }
    }

    return result;
};

console.log(threeSumSmaller([-2,0,1,3],2))