/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

    //꺾이는 순간을 찾아서 
    let indexes = [];
   
   //TODO 루프를 돌면서 가장 작은 부분을 찾고, 그 부분에서 작은부분보다 큰부분이 있다면, 확장하는 식
   //TODO 오른쪽에서 가장 큰부분을 고르고 오른쪽에서 가장 큰부분을 비교해가면서 오른쪽을 확장해 나가는 방식으로 구현하면된다.

    //먼저 왼쪽에서 시작하는 index pointer를 선언
    let leftNum = Infinity; // 가장 작은걸 찾는 것이기 때문에 
    let rightNum = -Infinity; // 가장 큰 값을 찾아서 오른쪽으로 함

    //O(n);
    for(let i = 1 ; i <nums.length ;i++){
        if(nums[i-1] > nums[i]){
            leftNum = Math.min(nums[i],leftNum); //가장 작은 부분을 찾으면된다. 
        }
    }
    // O(n)
    for(let i = nums.length -2; i >= 0 ; i--){
        if(nums[i] > nums[i+1]){
            rightNum = Math.max(nums[i],rightNum);
        }
    }

    let leftIndex = 0; //맨오른쪽에서부터 인덱스를 넓혀나가기 왼쪽 인덱스
    while(leftIndex <nums.length && nums[leftIndex] <= leftNum){
        //현재의 인덱스가 
        leftIndex++
    }

        let rightIndex = nums.length -1;
    while(rightIndex >= 0  && nums[rightIndex] >= rightNum){
        rightIndex--;
    }

    //이미 정렬이 된 경우 leftIndex가 rightIndex보다 작지 않아서 0을 반환
    return leftIndex < rightIndex ? rightIndex - leftIndex + 1 : 0
   

};

//TODO 일정하게 늘어나는 구간이 아닌, 


// 늘었다가 줄어드는 전체 구간을 구하는것 

