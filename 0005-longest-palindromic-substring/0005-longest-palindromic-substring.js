/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let dpTable = Array.from({length : s.length} ,  () => new Array(s.length).fill(0));

    for(let i = 0 ; i <s.length ;i++){
        dpTable[i][i] = 1; 
    }

    for(let i = 0 ; i < s.length -1; i++){
        let startChar = s[i];
        let endChar = s[i+1]
        if (startChar == endChar) dpTable[i][i+1] = 2; 
    }

    for(let i = 2 ; i <s.length; i++){
        let row = 0;
        let col = i;

        while (col < s.length){
            let startChar = s[row];
            let endChar = s[col];
            prevCount = dpTable[row+1][col-1];
            if (startChar == endChar && prevCount != 0) {
                dpTable[row][col] = prevCount +2;
            }
            row +=1;
            col +=1;
        }
    }

    let maxLen = 0;
    let startIdx = 0;
    let endIdx = 0;

    for(let i =0 ; i <s.length ;i++){
        for(let j = 0; j < s.length ; j++){
            crtLength = dpTable[i][j];
            if(maxLen < crtLength){
                maxLen = crtLength;
                startIdx = i;
                endIdx = j;
            }
        }
    }

    return s.substring(startIdx,endIdx+1);

    // substring 을 풀 때, dp로도 생각할 수 있다. 
    

    // 두번째 문자열을 추가할 때, 현재걸 추가할지, 여부를 판단. // 이전 문제가 현재 문제를 해결 못해줄 수도 있다. -> 그럼 교차 점화식 생각?

    // 교차점화식말고 일단 평문을 저장  이전 palindrome이 현재 문자열을 추가한다해도 palindrome일 수 없을 수 있기 때문에

    // 현재 문자를 추가해서 palindrome인거 , 현재문자만 있을 때 취급 , 현재 문자만 빼고 , 이전 palindrome인거 , palindrome이 아니였으나 현재 문자를 추가하면 palindrome이 되는 것 

    // F(m,n) 으로 from to로 해당 2차원 배열로 해당 문자열까지의 palindrome 여부 판단. 
    

    //0으로 채워진 2차원 배열 row가 from col 이 to 라고 생각
    
    //F(m,n) 일때, m,n의 길이가 짝수 , 홀수 일때, 또 다름 

};

//가장 긴 palindrome을 가진 substring  

// 



//브루트 포스로 풀면 O(n^3) 으로 풀 수 있다. 두개의 포인터를 두고 -> palindrome인지 확인하는 방법, 

//palindrome 판별은 