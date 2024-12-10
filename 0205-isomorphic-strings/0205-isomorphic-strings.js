/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function(s, t) {
//     let mp1 = {};
//     let mp2 = {};

//     for(let i = 0 ; i < s.length ;i++){
//         if(!mp1[s[i]]) mp1[s[i]] = t[i]
//         else if(mp1[s[i]] !== t[i]) return false 

//         if(!mp2[t[i]]) mp2[t[i]] = s[i]
//         else if(mp2[t[i]] !== s[i]) return false 
//     }

//     return true
// };

var isIsomorphic = function(s,t) {
    let mp1 = {};
    let mp2 = {};


    for(let i =0 ; i <s.length ;i++){
         if(!mp1[s[i]]) mp1[s[i]] = t[i];
         else if(mp1[s[i]] != t[i]) return false;

         if(!mp2[t[i]]) mp2[t[i]] = s[i]
         else if(mp2[t[i]] != s[i]) return false;
    }
    return true;

}