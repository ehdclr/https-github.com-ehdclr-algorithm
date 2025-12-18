function solution(cacheSize, cities) {
    
    //가장 오래된 도시 지우기. 
    let arr = [];
    let time = 0;
    
    for(let i = 0 ; i < cities.length ;i++){
        let curCity = cities[i].toLowerCase();
        //cache hit일때 가장 맨뒤로 
        let idx = arr.indexOf(curCity);
        if(idx === -1){
            time += 5; //cache miss;
            if(arr.length === cacheSize){
                arr.shift();
            }
            if(cacheSize === 0) continue;
            arr.push(curCity)
        } else {
            //cache hit 
            time += 1;
            //해당 부분만 빼서 맨뒤로 넣어야함
            let item = arr[idx]
            arr = arr.slice(0,idx).concat(arr.slice(idx+1,arr.length))
            arr.push(item)
        }
    }

    return time;
}