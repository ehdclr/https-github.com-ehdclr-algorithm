/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false); 
    dp[0] = true;

    for(let i = 0 ; i < s.length ;i++){
        for(let j = i +1 ; j < s.length +1 ; j++){ // 이후 
            if(!dp[i]) continue;

            if(dp[i] && wordDict.includes(s.slice(i,j))){
                dp[j]  = true;
            }
        }
    }

    return dp[s.length]
};