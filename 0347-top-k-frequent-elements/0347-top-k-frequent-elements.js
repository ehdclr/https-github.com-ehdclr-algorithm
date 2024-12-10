/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 //O(nlogn) 정렬을 하게 함
var topKFrequent = function(nums, k) {

    //arr 로 풀 수도 있음 

    let mp = {};
    let result = []

    for(let i =0 ; i < nums.length ;i++){
        mp[nums[i]] = (mp[nums[i]] || 0) + 1;
    }

    for(let [k,v] of Object.entries(mp)){
       result.push([Number(k),Number(v)])
    }

    return result.sort((a,b)=> b[1] - a[1]).slice(0,k).map((el) => el[0]);
};