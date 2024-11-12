/**
 * @param {number[]} nums
 * @return {number}
 */

 // returns o(logn) 으로 끝내야함

 //정상인 곳의 인덱스
var findPeakElement = function(nums) {
    //O(logn) 으로 구하라는말은 정렬보다 적은 시간 복잡도를 가지라는 소리임 - 바이너리서치

    let start = 0 ;
    let end = nums.length  - 1;
    let maxNum = -Infinity;
    let returnIndex = 0;

    if (nums.length <= 1){
        return 0;
    }

    while(start<end){

    let mid = parseInt((start+end)/2); //가운데 인덱스
    let curNum = nums[mid];
    let nextNum = nums[mid+1];

    if(curNum < nextNum){
        start = mid +1
    } else{
        end = mid
    }
    }
    return start;
};