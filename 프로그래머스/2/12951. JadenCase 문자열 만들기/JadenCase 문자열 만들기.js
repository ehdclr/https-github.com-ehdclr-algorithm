function solution(s) {
    const arr = s.split(" ");
    let answer = []
    
    
    for(let str of arr){
        let string = "";
        for(let i = 0 ; i < str.length ; i++){
            if(str[i].charCodeAt() >= 97 || str[i].charCodeAt() <= 123){ //알 파벳이다.
                if(i == 0) string += str[i].toUpperCase();
                else string +=str[i].toLowerCase()
            } else {
                string += str[i]
            }
        }
        
        answer.push(string);
    }
    
    
    return answer.join(" ")
    
    
    
    return answer.join(" ");
}