/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //TODO 공간복잡도 O(1)로 푸는 방법
    //이미 있는 배열로 푸는 방법
    let result = Infinity;

    //해당 숫자가 인덱스에 있으면, - 처리 
    nums.map((el)=>{
        let num = Math.abs(el); //숫자 꺼내기 절대값... -인 순간에는 이미 있는 숫자 -> 이숫자의 인덱스에 판단
        if(nums[num -1] > 0){ //
            //TODO 양수이면 방문한거라 생각하고
            nums[num -1] = -nums[num -1];
        } 
        else if(nums[num -1] < 0) {
            //TODO 이미 방문한 곳이라면 
            result = num;
            
        }
    })
    return result;
};