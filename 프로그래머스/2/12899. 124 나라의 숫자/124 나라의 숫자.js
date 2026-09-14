function solution(n) {
    var answer = '';
    
    while(n > 0){
        n -= 1; // 하나를 미리 빼두고 하는게 맞음
        let digits = '124'[n % 3];
        answer = digits + answer;
        n = Math.floor(n/3);
    }
    
    return answer;
}