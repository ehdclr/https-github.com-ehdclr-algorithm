/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    //두개의 스택을 만든다
    let stack =[];
    let countStack = []; //반복되는 top의 갯수를 세는 스택

    for(let char of s){
        if(stack.length ==0 ){
            stack.push(char);
            countStack.push(1);
        } else {
            let top = stack[stack.length -1];
            if(char == top){
                // char와 top 이 같을 때, countStack의 top이 k -1 와 같다면 (넣지 않아야하니까)
                let countTop = countStack[countStack.length -1];
                //만약에 같다면, stack에서 pop을 k-1 만큼 하면됨
                if(countTop == k - 1 ){
                    for(let i = 1; i <= k -1 ; i++ ){
                        stack.pop()
                    }
                    countStack.pop();
                } else {
                    //만약에 다르다면, stack에 push하고 countTop을 업데이트
                    stack.push(char);
                    countStack[countStack.length - 1] = countTop + 1;
                }
            } else {
                stack.push(char);
                countStack.push(1);
            }
        }
    }

    return stack.join("")
};

console.log(removeDuplicates("deeedbbcccbdaa",3))