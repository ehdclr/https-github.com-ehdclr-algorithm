/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;
    const base = 256; // ASCII 문자 기반 (기수)
    const prime = 101; // 소수 (해시 충돌 최소화)

    // 예외 처리: needle이 더 길면 매칭 불가능
    if (m > n) return -1;

    let needleHash = 0; // 패턴 해시값
    let curHash = 0;    // 현재 윈도우 해시값
    let h = 1;          // base^(m-1) % prime

    // h 계산: base^(m-1) % prime
    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    // 첫 번째 윈도우와 패턴의 해시값 계산
    for (let i = 0; i < m; i++) {
        needleHash = (base * needleHash + needle.charCodeAt(i)) % prime;
        curHash = (base * curHash + haystack.charCodeAt(i)) % prime;
    }

    // 슬라이딩 윈도우를 통해 매칭 수행
    for (let i = 0; i <= n - m; i++) {
        // 해시값이 일치하면 문자열 직접 비교
        if (needleHash === curHash) {
            if (haystack.slice(i, i + m) === needle) {
                return i; // 첫 매칭 인덱스 반환
            }
        }

        // 다음 윈도우로 이동 (슬라이딩)
        if (i < n - m) {
            curHash = (base * (curHash - haystack.charCodeAt(i) * h) + haystack.charCodeAt(i + m)) % prime;

            // 음수 해시값을 양수로 변환
            if (curHash < 0) {
                curHash += prime;
            }
        }
    }

    return -1; // 매칭 실패
};