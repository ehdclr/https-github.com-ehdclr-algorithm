function solution(msg) {
    let mp = new Map(); 
    for(let i = 1 ; i <= 26 ; i++){
        mp.set(String.fromCharCode(64+i), i)
    } //Map설정
    
    let prev = ""
    let last = 26;
    let answer = [];
    for(let c of msg){
        if(mp.get(prev + c)){
            //있다면, 그냥 prev에 넣기 //K 그냥 넣기 
            prev += c
        } else {
            answer.push(mp.get(prev)); // 이전 상태 바로 넣기 K 출력 없으니까 
            mp.set(prev+c, ++last); // last 추가해서 set에 넣기 
            prev = c; // 새로 초기화 
        }
    }
    answer.push(mp.get(prev)) //남은거 넣기 
    
    return answer;
}