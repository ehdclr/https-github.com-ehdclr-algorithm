/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    
    nums.sort((a,b)=> a-b);
    let result = Infinity; //차이가 최소인걸 찾아야하니까
    for(let i = 0 ; i<nums.length ;i++){
        //맨앞 
        let start = i+1;
        let end = nums.length -1;

       while(start< end){
        let sum = nums[i] + nums[start] + nums[end];
        if(Math.abs(target - sum) < Math.abs(target -result)){
            result = sum;
        }

        if(sum < target){
            start++

        } else if (sum > target){
            end--
        }else{
            return sum;
        }
    
       } 
    }
    return result;
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5],-2))


//target에서 뺐을때, 절대값이 가장 가까운거 찾으면됨

