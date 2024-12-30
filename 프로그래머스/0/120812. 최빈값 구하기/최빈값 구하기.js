function solution(array) {
    let mp = {}
    let modes = [];
    
    array.map((el) => {
        mp[`${el}`] = mp[`${el}`] ? mp[`${el}`] + 1 : 1;
    })
    
    let maxValue = Object.values(mp).reduce((a,b) => Math.max(a,b));
    
    for(let [k,v] of Object.entries(mp)){
        if(v == maxValue) modes.push(k)
    }
    
    return modes.length > 1 ? -1 : parseInt(modes[0]);
    //최빈값이 여러개이면, -1 리턴
}

//가장 많이 나오는 값 mp 로 풀면 시간복잡도 O(n) 으로 풀 수 있을 듯