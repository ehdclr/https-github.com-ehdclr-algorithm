function solution(n) {
    let dec = n.toString(2); //2진법으로
    let nCount = dec.split("").filter((el)=> el == "1").length;
    
    let start = n + 1;
    
    while(true){
        let bDec = start.toString(2);
        let bCount = bDec.split("").filter((el)=> el == "1").length; 
        if(nCount == bCount){
            break
        }
        
        start++;
    }
    
    
    return start
}

//n의 다음 큰 숫자는 n 보다 큰 자연수
// 2진수로 변환했을 때 1의 갯수가 같다.
// 1,2를 만족하는 가장 작은 수 

//n 1000_000자연수 nlogn만 가능

// 이전 숫자를 기억 stack, 혹은 dp -> 메모이제이션 바텀업 방식으로 생각

// 78 -> 1001110 -> 1을 더해 나가면서 이전 상태에서 1을 더하기 
// const a = 78
// console.log(a.toString(2)) 2 진법 연산하고 1씩 더해서 toString 했을 때 1의 count가 같으면 그 다음 숫자임 