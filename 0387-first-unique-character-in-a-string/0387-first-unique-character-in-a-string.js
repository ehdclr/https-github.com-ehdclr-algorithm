/**
 * @param {string} s
 * @return {number}
 */

 //map 사용
// var firstUniqChar = function(s) {
    
//     let newMap = new Map();

//     //전부 다 돌고
//     for(let idx = 0 ; idx<s.length ; idx++){
//         if(newMap.has(s[idx])){
//             let value = newMap.get(s[idx])
//             newMap.set(s[idx],value + 1)
//         } else {
//             newMap.set(s[idx], 1);
//         }
        
//     }

//     for(let idx = 0;  idx<s.length ;idx++){
//         if(newMap.get(s[idx]) ==1){
//             return idx;
//         }
//     }

//     //반복되는 것이 없다면, -1
//     return -1
// };

var firstUniqChar = function(s){
    let mp = {}

    for(let char of s){
        mp[char] = !mp[char] ? 1 : mp[char] +1;
    }

    for(let i = 0 ; i < s.length ;i++){
        if(mp[s[i]] == 1) return i;
    }

    return -1
}