/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0 ;
    let sum = 0;

    let sumMap = new Map()
    sumMap.set(0,1);
    
    //어떤 subarray (sub[j] - sub[i] )% k ==0  j가 현재위치 i가 포인터라하면
    //sub[j] % k == sub[i] % k 가 성립한다.


    for(let num of nums){
        sum += num

        let targetDiv = sum % k;

        if(targetDiv <0) targetDiv += k;

        if(sumMap.has(targetDiv)){
            count += sumMap.get(targetDiv);
        }

        sumMap.set(targetDiv,(sumMap.get(targetDiv) || 0) + 1)   
    }


    return count;
};