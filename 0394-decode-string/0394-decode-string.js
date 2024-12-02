/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    const stack = [];
    const countStack = [];

    let curStr = '';
    let curNum = 0;

    for(let char of s){
        if(Number.isInteger(+char)){
            curNum = curNum * 10 + Number(char);
        } else {
        if(char == "["){
            countStack.push(Number(curNum));
            stack.push(curStr);
            curStr = ''
            curNum = 0;
            continue;
        } else if ( char == "]"){
            let prevStr = stack.pop();
            let num = countStack.pop();
            curStr = prevStr + curStr.repeat(num);
            continue;
        } else {
            curStr += char;
        }
        }


    }
    return curStr;
};