func subsets(nums []int) [][]int {
    result := make([][]int, 0) // 결과 저장

    // DFS 함수 정의
    var dfs func(index int, path []int)
    dfs = func(index int, path []int) {
        // 현재 경로 추가 (복사본 저장)
        result = append(result, append([]int{}, path...))

        // 남은 숫자 처리
        for i := index; i < len(nums); i++ {
            path = append(path, nums[i]) // 현재 숫자 추가
            dfs(i+1, path)               // 다음 숫자 처리
            path = path[:len(path)-1]    // 추가된 숫자 제거
        }
    }

    // DFS 호출
    dfs(0, []int{})

    return result
}