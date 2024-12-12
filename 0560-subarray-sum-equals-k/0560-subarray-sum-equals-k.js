/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let newMap = new Map();

    let cumulativeArray = []
    let count = 0;

    let sum = 0; //k와 같은 sub array 몇개인지 
    for(let n of nums){
        //순회를 하면서 , 누적
        sum += n;
        cumulativeArray.push(sum);
    }

    //subarray 빈배열인 경우도 생각해야함 -> hashMap에 0, -1로 넣어주기
    //hashMap 만들기 
    cumulativeArray.forEach((v,i) => {
        if(!newMap.has(v)) newMap.set(v,[i]);
        else {
            let indexArray = newMap.get(v);
            newMap.set(v,[...indexArray,i]);
        }
    })

    //먼저 포인터에서 k와 더했을 때 ,hashMap 에 있으면 현재 인덱스에서 hashMap에 있는 인덱스 차이만큼 subArray가 되는거임
    for(let i =0 ; i <= cumulativeArray.length -1 ;i++){
        let targetSum = cumulativeArray[i] + k;
        if(newMap.has(targetSum) || cumulativeArray[i] == k){
            count += newMap.get(targetSum).length;
        }
    }

    //빈배열 처리도 해야함
    return count;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0; // 현재 누적 합
    let sumMap = new Map(); // 누적 합을 저장하는 해시맵
    sumMap.set(0, 1); // 초기값: 빈 배열을 처리하기 위해 0의 개수를 1로 설정

    for (let num of nums) {
        sum += num; // 현재 누적 합 계산

        // 누적 합에서 k를 뺐을 때의 값이 해시맵에 있다면, 그 개수만큼 서브어레이가 존재
        let targetSum = sum - k;
        if (sumMap.has(targetSum)) {
            count += sumMap.get(targetSum);
        }

        // 현재 누적 합을 해시맵에 추가 (이미 있으면 개수 증가)
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }

    return count;
};