/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mp1 = {}
    let mp2 = {}

    if(s.length != t.length ) return false;

    for(let i = 0 ; i <s.length ;i++){
        mp1[s[i]] = (mp1[s[i]] || 0)  + 1;
        mp2[t[i]] = (mp2[t[i]] || 0)  + 1;
    }

    for(let i =0 ; i <s.length ;i++){
        if(mp1[s[i]] != mp2[s[i]]) return false;
    }
    return true
};