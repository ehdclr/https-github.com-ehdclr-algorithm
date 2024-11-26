/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //TODO 배열로 스택을 구현할 수 있음 
  //TODO ) , } , ]   -> 여는걸 스택에 넣고, 닫는게 오면, stack 에서 pop 해주면됨
    let stack = new Stack();
    if(s.length % 2 != 0) return false;
    if(s.length == 0) return false

    for(let char of s){
        if(char =="(" || char == "[" || char =="{"){
            stack.push(char)
        } else {
            let top = stack.top(); // 스택의 맨 위 요소 확인
            if (
                (char === ')' && top === '(') ||
                (char === ']' && top === '[') ||
                (char === '}' && top === '{')
            ) {
                stack.pop(); // 매칭되면 pop
            } else {
                return false; // 매칭되지 않으면 false
            }
        }
        
    }
    return stack.isEmpty();
  
};


class Stack{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        if(this.stack.length < 1) return null;
        let result = this.stack.pop()
        return result
    }

    top(){
        if(this.stack.length <1) return null;
        let result = this.stack[this.stack.length -1];
        return result;
    }

    isEmpty(){
        return this.stack.length ===0;
    }
}


