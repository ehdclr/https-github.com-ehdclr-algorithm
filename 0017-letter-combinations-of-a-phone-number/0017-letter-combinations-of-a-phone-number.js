/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    let obj = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }

    let result = [];

    if( digits.length < 1) return []

    function bt(index, letters){

        if(index == digits.length ){
            result.push(letters.join(""))
            return;
        }
        let charNum = digits[index]; // 현재 문자

        for(let char of obj[charNum]){
            letters.push(char);
            bt(index + 1, letters);
            letters.pop()
        }

    }

    bt(0,[])

    return result;
    
};