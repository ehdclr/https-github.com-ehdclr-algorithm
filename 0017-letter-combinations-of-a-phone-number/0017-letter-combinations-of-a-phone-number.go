package main

func letterCombinations(digits string) []string {
    // 번호-문자 매핑
    object := map[byte]string{
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz",
    }

    // 결과 저장을 위한 슬라이스
    result := make([]string, 0)

    // 빈 입력 처리
    if len(digits) == 0 {
        return result
    }

    // 백트래킹 DFS 함수
    var dfs func(index int, path []byte)
    dfs = func(index int, path []byte) {
        if index == len(digits) {
            // 조합 완성 -> 문자열로 변환 후 추가
            result = append(result, string(path))
            return
        }

        // 현재 숫자에 해당하는 문자 탐색
        letters := object[digits[index]]
        for i := 0; i < len(letters); i++ {
            // 경로 추가 및 탐색 진행
            dfs(index+1, append(path, letters[i]))
        }
    }

    // DFS 실행
    dfs(0, []byte{})

    return result
}

