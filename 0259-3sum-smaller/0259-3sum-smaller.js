/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {

    if(nums.length < 3 ) return 0;

    nums.sort((a,b) => a-b);

    //i 가 가리키는 부분

    let result = 0;

    for(let i = 0 ; i < nums.length - 2 ; i++){
        // 
        let left = i + 1; 
        let right = nums.length - 1;
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            // target 보다 같거나 작으면
            if(sum < target){
                result += (right - left); // right - left 사이의 조합이 유효하므로 
                left++;
            } else {
                right--;
            }
        }     
    }
    
    return result;
};