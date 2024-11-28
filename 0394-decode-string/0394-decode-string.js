//TODO 스택 하나로만 푸는방법 
// const decodeString = s => {
//   const stack = [];
//   for (const char of s) {
//     if (char !== "]") { stack.push(char); continue; }
//     let cur = stack.pop();
//     let str = '';
//     while (cur !== '[') {
//       str = cur + str;
//       cur = stack.pop();
//     }
//     let num = '';
//     cur = stack.pop();
//     while (!Number.isNaN(Number(cur))) {
//       num = cur + num;
//       cur = stack.pop();
//     }
//     stack.push(cur);
//     stack.push(str.repeat(Number(num)));
//   }
//   return stack.join('');
// };

//TODO 공간복잡도를 늘리고 스택 두개로 푸는방법
const decodeString = s => {
    let stack = [];
    let num_stack = [];

    let curNum = 0;
    let curStr = '';

    for(let char of s){
        if (char == "[") {
            stack.push(curStr);
            num_stack.push(curNum);;
            curNum =0;
            curStr =''
            continue;
        } 
        else if(char == "]"){
            let prevStr = stack.pop();
            let num = num_stack.pop();
            curStr = prevStr + curStr.repeat(num);
            continue;
        } else if(Number.isInteger(+char)){
            curNum = curNum*10 + Number(char);
        } else {
            curStr += char;
        }
    }

    return curStr;
}