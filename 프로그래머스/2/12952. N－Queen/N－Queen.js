function solution(n) {
    let count = 0;


    function dfs(row,visited){
        if(row === n){
            count+=1;
            return
        }
        for(let i = 0 ; i < n ;i++){
            if(!isQueen(row,i,visited)) continue;
            visited.push([row,i])
            dfs(row+1, visited)
            visited.pop()
        }
    }
    
    dfs(0,[])
    
    return count
}



function isQueen(cx,cy,visited){
    for(let [x,y] of visited){
        if(cx === x || cy === y || Math.abs(cx - x) === Math.abs(cy -y))  return false;
    }
    
    return true;
}