/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let newMap = new Map();

    //전부 다 돌고
    for(let idx = 0 ; idx<s.length ; idx++){
        if(newMap.has(s[idx])){
            let value = newMap.get(s[idx])
            newMap.set(s[idx],value + 1)
        } else {
            newMap.set(s[idx], 1);
        }
        
    }

    for(let idx = 0;  idx<s.length ;idx++){
        if(newMap.get(s[idx]) ==1){
            return idx;
        }
    }

    //반복되는 것이 없다면, -1
    return -1
};