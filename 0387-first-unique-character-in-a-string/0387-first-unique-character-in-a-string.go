func firstUniqChar(s string) int {
    // 맵 생성: 문자(rune)를 키로, 등장 횟수를 값으로 저장
    newMap := make(map[rune]int)

    // 첫 번째 반복문: 각 문자의 등장 횟수 계산
    for _, v := range s {
        newMap[v]++
    }

    // 두 번째 반복문: 처음 등장 횟수가 1인 문자의 인덱스 반환
    for i, v := range s {
        if newMap[v] == 1 {
            return i
        }
    }

    // 모든 문자가 반복되면 -1 반환
    return -1
}