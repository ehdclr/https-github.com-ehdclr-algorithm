function solution(n) {
    const numbers = ['4', '1', '2']; // 인덱스 0,1,2 → 나머지 0,1,2에 대응
    let answer = '';
    
    while (n > 0) {
        const remainder = n % 3;
        n = Math.floor(n / 3);
        
        // 나머지가 0인 경우 (3의 배수) 특별 처리
        if (remainder === 0) {
            n -= 1; // 자릿수 올라가는 것을 방지
        }
        
        answer = numbers[remainder] + answer;
    }
    
    return answer;
}