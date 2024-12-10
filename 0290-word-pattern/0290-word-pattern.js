var wordPattern = function(pattern, s) {
    let mapPatternToWord = new Map(); // 패턴 -> 단어
    let mapWordToPattern = new Map(); // 단어 -> 패턴

    let words = s.trim().split(/\s+/); // 문자열을 공백 기준으로 나눔

    // 패턴과 단어의 길이가 다르면 바로 false
    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i]; // 패턴 문자
        let word = words[i];   // 현재 단어

        // 패턴 → 단어 매핑 확인
        if (mapPatternToWord.has(char)) {
            if (mapPatternToWord.get(char) !== word) return false; // 매핑 불일치
        } else {
            mapPatternToWord.set(char, word); // 새로운 매핑 추가
        }

        // 단어 → 패턴 매핑 확인
        if (mapWordToPattern.has(word)) {
            if (mapWordToPattern.get(word) !== char) return false; // 매핑 불일치
        } else {
            mapWordToPattern.set(word, char); // 새로운 매핑 추가
        }
    }

    return true; // 모든 조건 만족 시 true
};