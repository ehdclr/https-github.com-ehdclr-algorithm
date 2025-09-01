const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const ice = [];

for (let i = 1; i <= N; i++) {
    ice.push(input[i].split(' ').map(Number));
}

// 상하좌우 방향
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// BFS로 연결된 빙산 개수 세기
function bfs(x, y, visited, grid) {
    const queue = [[x, y]];
    visited[x][y] = true;
    
    while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];
            
            if (nx >= 0 && nx < N && ny >= 0 && ny < M && 
                !visited[nx][ny] && grid[nx][ny] > 0) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
}

// 빙산 덩어리 개수 세기
function countIcebergs(grid) {
    const visited = Array(N).fill().map(() => Array(M).fill(false));
    let count = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] > 0 && !visited[i][j]) {
                bfs(i, j, visited, grid);
                count++;
            }
        }
    }
    
    return count;
}

// 빙산 녹이기
function meltIce(grid) {
    const newGrid = grid.map(row => [...row]);
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] > 0) {
                let seaCount = 0;
                
                // 상하좌우 바다(0) 개수 세기
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    
                    if (nx >= 0 && nx < N && ny >= 0 && ny < M && grid[nx][ny] === 0) {
                        seaCount++;
                    }
                }
                
                // 빙산 높이 감소 (0보다 작아지지 않도록)
                newGrid[i][j] = Math.max(0, grid[i][j] - seaCount);
            }
        }
    }
    
    return newGrid;
}

// 빙산이 모두 녹았는지 확인
function isAllMelted(grid) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] > 0) return false;
        }
    }
    return true;
}

let year = 0;
let currentIce = ice.map(row => [...row]);

while (true) {
    const icebergCount = countIcebergs(currentIce);
    
    // 빙산이 2개 이상으로 분리되면 현재 년수 출력
    if (icebergCount >= 2) {
        console.log(year);
        break;
    }
    
    // 빙산이 모두 녹았으면 0 출력
    if (icebergCount === 0) {
        console.log(0);
        break;
    }
    
    // 빙산 녹이기
    currentIce = meltIce(currentIce);
    year++;
}