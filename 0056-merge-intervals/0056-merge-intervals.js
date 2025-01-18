/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);

    let start = intervals[0][0];
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        //만약에 start가 이전 end보다 작으면, start 그대로
        //이 중에서도 이전 end가 현재 end보다 크면 end변경
        if(end >= intervals[i][0]){
            end = Math.max(end, intervals[i][1]);
        } else {
            result.push([start,end])
            start = intervals[i][0];
            end = intervals[i][1]
        }
        //아니라면 start를 바꾸기 

    }
    result.push([start,end])

    return result;
};