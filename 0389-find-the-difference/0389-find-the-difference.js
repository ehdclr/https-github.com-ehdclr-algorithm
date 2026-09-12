/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    //s 와 t가 있다. 
    let e = new Map()
    let answer = "";

    for(let x of s){
        if(!e.get(x)) e.set(x,1);
        else e.set(x, e.get(x) +1);
    }

    for(let y of t){
        //만약에 가지고 있으면, 하나 빼기
        if(e.get(y)) e.set(y, e.get(y) -1);
        else e.set(y,1);
    }

    for(let [k,v] of e.entries()){
        if(v >= 1){
            for(let i = 0 ; i < v ; i++) answer += k
        }
    }

    return answer;
};