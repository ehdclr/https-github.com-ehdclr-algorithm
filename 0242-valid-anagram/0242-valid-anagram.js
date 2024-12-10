/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //시간복잡도 O(2n) -> O(N) 방법
// var isAnagram = function(s, t) {
//     let mp1 = {}
//     let mp2 = {}

//     if(s.length != t.length ) return false;

//     for(let i = 0 ; i <s.length ;i++){
//         mp1[s[i]] = (mp1[s[i]] || 0)  + 1;
//         mp2[t[i]] = (mp2[t[i]] || 0)  + 1;
//     }

//     for(let i =0 ; i <s.length ;i++){
//         if(mp1[s[i]] != mp2[s[i]]) return false;
//     }
//     return true
// };


//정렬하는 방법 O(nlogn) 방법
var isAnagram = function(s,t){

    let arr1 = s.split("").sort();
    let arr2 = t.split("").sort();

    if(arr1.length != arr2.length) return false;

    for(let i = 0 ; i <s.length ;i++){
        if(arr1[i] != arr2[i]) return false;
    }

    return true;
}