function mergeAlternately(word1: string, word2: string): string {
    //하나씩 먼저 word1부터 먼저 끝나는거부터 진행 
    let answer = ""
    for(let i = 0 ; i < Math.max(word1.length, word2.length); i++){
        answer += word1[i] ? word1[i] : ""
        answer += word2[i] ? word2[i] : ""
    }

    return answer;
};