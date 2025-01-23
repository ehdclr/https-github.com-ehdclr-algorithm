/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = [];

    //백 트래킹 구현
    function bt(text,openMark, closeMark){
        if( closeMark.length == n && openMark.length === n ){ // 닫는것과 동시에 총 깊이가 6이여야함  깊이는 0부터 시작하니
            result.push(text.join(""))
            return;
        }

        //적다면 openMark넣기
        if(openMark.length < n ){
            text.push("(");
            openMark.push("(")
            bt(text,openMark,closeMark);
            text.pop();
            openMark.pop()
        } 

        if(closeMark.length < openMark.length){
            text.push(")");
            closeMark.push(")")
            bt(text,openMark,closeMark);
            text.pop();
            closeMark.pop()
        }
    }

    bt([],[],[]);
    return result;

};

//N개의 괄호 쌍을 찾는 백트래킹 

// 브랜치는 하나를 하면 닫거나 열기 괄호 여닫는건 스택으로 해야하지 않나? 닫는거 에 대한 N 개인걸 생각하면됨
//마지막 마치는 조건은 닫는것의 갯수가 N개 일때임
// 