function solution(maps) {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];



  // startX = 0 , startY = 0, 
  // 움직임  n -1, m -1 에 도착하면, 
  let n = maps.length; //행
  let m = maps[0].length;  //열 

  const visited = Array.from(
    { length: n },
    () => new Array(m).fill(false)
  );

  //도착할 방법이 없음 -1  
  let q = [];
  q.push([0, 0, 1]) //y, x , dist  
  visited[0][0] = true;
  let answer = -1

  while (q.length > 0) {
    let [cy, cx, cost] = q.shift();

    if (cy === n - 1 && cx === m - 1) {
      answer = cost
    }
    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + cx;
      let ny = dy[i] + cy;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && maps[ny][nx] === 1 && !visited[ny][nx]) {
        visited[ny][nx] = true;
        q.push([ny, nx, cost + 1]);
      }
    }
  }

  return answer
}