/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let maxLength = 0;
    let left = 0; 

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

//슬라이딩 윈도우는 O(n)
//공간복잡도는 O(m) 알파벳은 26개이기때문에 O(26) -> O(1)이 된다.
