/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(s) {
    return s.split("").reverse().join("") == s;
}


function bt(s, start, path, result){
    if(start === s.length){  //앞에서 자르는 간격을 늘릴 것 
        result.push([...path]);
        return;
    }

    for(let end = start ; end < s.length ; end++){
        let subString = s.substring(start, end +1); // a|ab aa|b 이런식으로 앞에서부터 자르는걸로
        if(isPalindrome(subString)){
            path.push(subString);
            bt(s, end + 1, path, result);
            path.pop()
        }
    }

}

var partition = function (s) {
    if (s.length === 0) return [];

    let result = [];// 결과를 담을 것

    bt(s, 0, [], result);


    return result;
};