function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const q =[[0,0]];
    const visited = Array.from({ length: n}, () => new Array(m).fill(false));
    visited[0][0] = true;
    
    const dx =[-1,1,0,0];
    const dy =[0,0,-1,1];
    
    while(q.length > 0){
        let [curX, curY] = q.shift();
        
        for(let i = 0 ; i < 4 ; i++){
            let nx = dx[i] + curX;
            let ny = dy[i] + curY;
            
            if(nx >= 0 && ny >=0 && nx < n && ny < m && !visited[nx][ny] && maps[nx][ny] ===1 ){
                visited[nx][ny] = true;
                maps[nx][ny] = maps[curX][curY] + 1;
                q.push([nx,ny])
            }
        }
    }
    
    
    return maps[n-1][m-1] === 1 ? -1 : maps[n-1][m-1]
}