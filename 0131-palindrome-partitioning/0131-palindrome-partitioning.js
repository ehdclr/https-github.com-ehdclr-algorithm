/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

    let result = []

    function isPalindrome(subString){
        let start = 0;
        let end = subString.length - 1;
        while(start < end){
            if(subString[start] !== subString[end]) return false;
            start++;
            end--
        }

        return true;
    }

    function bt(start, path){
        //멈출 조건
        if(start == s.length){ // 앞에서 잘라가는 부분이 점점 늘어나서 같아지면
            result.push([...path])
            return;
        }

        for(let i = start ; i < s.length ; i++){
            let sub = s.substring(start, i + 1); // a|ab 에서 잘랐으니 그다음 ab에서 SUBSTRING해야하니 시작점이 달라짐
            if(isPalindrome(sub)){
                path.push(sub);
                bt(i + 1, path);
                path.pop()
            }
        }

    }

    bt(0,[])

    return result;
};