function solution(maps) {
    // 0,0 - > 4,4
    let n = maps.length;
    let m = maps[0].length;
    let visited = Array.from({length : n}, () => new Array(m).fill(false)); //방문 했는지 여부
        
    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1]; //상하좌우 움직여야하므로 선언
    
    let queue =[]; //너비우선 탐색으로 진행할 것이기 때문에 큐
    visited[0][0] = true; //첫번째 1,1 은 방문처리
    queue.push([0,0,1]) // x, y , distance 순으로
    let index = 0;
    
    while(index < queue.length ){
        let [cx,cy,dist] = queue[index++];
        //종료 조건
        if(cx === n -1 && cy === m-1) return dist;

        for(let i =0 ; i <4 ; i++){
            let nx = dx[i] + cx;
            let ny = dy[i] + cy;
            if(nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny] || maps[nx][ny] === 0) continue;
            visited[nx][ny] = true;
            queue.push([nx,ny,dist+1]);          
        }               
    }
    
    return -1 //기본값은 -1
}

//최소 거리 - BFS로 구하면 편하다. 
// n , m <= 100  n x m 
// 1,1 -> 5,5 로 지나가면됨