/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let mp = {};

    // 단어의 빈도수를 계산
    for (let word of words) {
        mp[word] = (mp[word] || 0) + 1;
    }

    // 빈도수를 기준으로 정렬, 같은 빈도수일 경우 사전 순으로 정렬
    return Object.keys(mp)
        .sort((a, b) => {
            if (mp[b] === mp[a]) {
                return a.localeCompare(b); // 빈도수가 같으면 사전 순
            }
            return mp[b] - mp[a]; // 빈도수 내림차순
        })
        .slice(0, k); // 상위 k개 반환
};