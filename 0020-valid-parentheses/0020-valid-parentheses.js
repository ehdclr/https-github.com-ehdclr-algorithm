/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  
    //todo 괄호 닫는 문제는 stack
    //여는 표시만 넣으면됨
    for(let str of s){
        let top = stack[stack.length -1];
        if(!!top && top == "[" && str == "]"){
            stack.pop();
        } else if (!!top && top == "{" && str == "}"){
            stack.pop();
        } else if (!! top && top == "(" && str == ")"){
            stack.pop();
        } else {
            stack.push(str)
        }
    }

    return stack.length > 0 ? false : true;
};