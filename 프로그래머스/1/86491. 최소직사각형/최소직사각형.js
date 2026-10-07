function solution(sizes) {
    //모든 명함을 수납할 수 있는 가장 작은거 가장 큰거 하나 가장 작은거 하나 골랐을 때 
    let p = []; //크기가 더 큰거
    let q = []; // 크기가 더 작은거
    
    
    for(let i = 0; i < sizes.length ; i++){
        p.push(Math.max(sizes[i][0],sizes[i][1]))
        q.push(Math.min(sizes[i][0],sizes[i][1]))
    }
    
    p.sort((a,b)=>a-b);
    q.sort((a,b)=>a-b);
    
    console.log(p,q)
    
    
    // 가장 큰거 
    return p[sizes.length -1] * q[sizes.length -1];
}

console.log(solution([[2, 1], [10, 3]]))
// 엣지케이스 찾기 
console.log(solution([[20, 2], [20, 10]]))