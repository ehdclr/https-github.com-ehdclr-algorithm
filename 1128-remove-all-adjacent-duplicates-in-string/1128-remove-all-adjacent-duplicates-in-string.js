/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let stack = [];

  for(let char of s){
    
    if(stack.length == 0 ) stack.push(char)
    else {
        let top = stack[stack.length -1];
        if(top == char){
            stack.pop();
        } else {
            stack.push(char);
        }
    }

  }

  return stack.join("")
};