function strStr(haystack: string, needle: string): number {
    
    //슬라이딩 윈도우로 하면됨
    for(let i = 0 ; i < haystack.length ;i++){
        if(haystack.substring(i,i+needle.length) == needle) return i;
    }
    return -1
};