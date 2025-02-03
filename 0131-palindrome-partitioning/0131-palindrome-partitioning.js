/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

function backtrack(s, start, path, result) {
    if (start === s.length) {
        result.push([...path]);
        return;
    }
    
    for (let end = start; end < s.length; end++) {
        let substring = s.substring(start, end + 1);
        if (isPalindrome(substring)) {
            path.push(substring);
            backtrack(s, end + 1, path, result);
            path.pop();
        }
    }
}

var partition = function (s) {
    let result = [];
    backtrack(s, 0, [], result);
    return result;
};

console.log(partition("aab"));