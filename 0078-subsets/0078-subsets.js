/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];

    function dfs(index, current) {
        // 현재 부분집합을 결과에 추가
        result.push([...current]);

        // 남은 숫자들로 부분집합 생성
        // 방문하고 다음 숫자로 넘어가야하기때문에 index를 +1 함
        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]);  // 숫자 선택
            dfs(i + 1, current);   // 다음 숫자 처리
            current.pop();         // 선택 취소
        }
    }

    dfs(0, []); // DFS 시작
    return result;
};