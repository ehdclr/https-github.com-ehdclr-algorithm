func isIsomorphic(s string, t string) bool {
    newMap1 := make(map[byte]byte) // s -> t 매핑
    newMap2 := make(map[byte]byte) // t -> s 매핑

    for i := range s {
        sChar := s[i]
        tChar := t[i]

        // 기존 매핑이 있는 경우 확인
        if mappedChar, exists := newMap1[sChar]; exists {
            if mappedChar != tChar {
                return false
            }
        } else {
            newMap1[sChar] = tChar
        }

        // 반대 방향 매핑 확인
        if mappedChar, exists := newMap2[tChar]; exists {
            if mappedChar != sChar {
                return false
            }
        } else {
            newMap2[tChar] = sChar
        }
    }

    return true
}