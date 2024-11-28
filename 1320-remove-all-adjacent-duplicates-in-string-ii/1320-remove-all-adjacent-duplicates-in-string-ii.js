/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {

    let stack = [];
    let countStack = []; // 해당 같은 문자열의 갯수를 셀 count Stack을 추가
    //만약 top 이 k와 같아진다면 해당 k만큼 stack에서 빼야함(pop)

    for(let char of s) {
        if (stack.length == 0 ){
            stack.push(char);
            countStack.push(1);
        } else {
            let top = stack[stack.length -1];
            if (top == char && !!top){
                //여기서 두가지경우 k와 같을 때임 
                let countTop = countStack[countStack.length -1];
                if(countTop == k-1){
                    for(let i = 1 ; i <= k - 1;i++){
                        stack.pop()
                    }
                    countStack.pop();
                } else {
                  stack.push(char);
                  countStack[countStack.length -1] = countTop +1;
                }
            } else { 
                //다르면 그냥 Push
                stack.push(char);
                countStack.push(1);
            }
        }
        
    }


    return stack.join("")
};