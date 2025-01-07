/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(!digits) return []
    let result =[];

    let object = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }


    function dfs(depth, letters){
        if(depth == digits.length){
            result.push(letters.join(""))
            return;
        }

        let curNum = digits[depth];
        for(let alpha of object[curNum]){
            letters.push(alpha);
            dfs(depth+1, letters);
            letters.pop()
        }
    }
    dfs(0,[]);
    return result;
};