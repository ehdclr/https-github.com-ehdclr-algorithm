/**
* @param {number[][]} intervals
* @return {number[][]}
*/
var merge = function(intervals) {
//TODO 겹치는 부분이 있는 조합은 바로 결과로 내기 

//start, end
//start와 end를 비교해야함

//겹치지 않으면 다음으로 가고 , 해당 start와 end를 내면됨
//curIndex의 end와 nextIndex의 start가 겹치면 union으로 생각

//새로운 start end가 되고 다음걸 비교 nextIndex가 배열 끝이 되면 다음 curIndex가 바뀜 
let result = [];


//하나씩 비교하면, O(n^2)의 시간복잡도가 예상됨
//먼저 정렬을 하면 O(nlogn)

intervals.sort((a,b) => a[0] - b[0]) ; //start를 기준으로 정렬
let startNum = intervals[0][0]
let lastNum = intervals[0][1]; //end의 숫자를 기록 하는 변수
let union = []
for(let curIndex = 1 ; curIndex < intervals.length ; curIndex++){
    let [cx,cy] = intervals[curIndex]; //마지막 숫자를 기억
    if(cx <= lastNum){
        startNum = startNum <= cx ? startNum : cx;
        lastNum = lastNum <= cy ? cy : lastNum;
    }
    //TODO 이제 현재랑 안겹치는경우
    else {
        result.push([startNum,lastNum])
        startNum = cx;
        lastNum = cy;
    }
}
result.push([startNum,lastNum]);

//[[1,3],[2,6],[7,18],[8,10]] 인 경우 
// 1,6 으로 먼저 기록 

//

return result;
};