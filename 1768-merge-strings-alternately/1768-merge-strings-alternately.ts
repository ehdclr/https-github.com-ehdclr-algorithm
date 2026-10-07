function mergeAlternately(word1: string, word2: string): string {
    // 둘중 하나씩 번갈아가고 그다음 나머지 
    let i = 0; 
    let j = 0;

    let answer = "";
    while(i < word1.length && j < word2.length){
        answer += word1[i++];
        answer += word2[j++];
    }

    if(i < word1.length){
        while(i <word1.length){
            answer += word1[i++];
        }
    } else if(j < word2.length){
        while(j <word2.length){
            answer += word2[j++];
        }
    }

    return answer;
};