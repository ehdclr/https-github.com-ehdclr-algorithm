/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    //다섯번 움직임을 체크해야함 
    let newStr = s.repeat(2); //두번 반복 

    for(let i = 0 ; i <s.length; i++){
        if(newStr.substring(i,i+s.length) ==  goal) return true;
    }

    return false;

};