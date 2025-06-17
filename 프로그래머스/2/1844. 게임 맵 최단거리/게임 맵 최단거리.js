function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const queue = [[0, 0]];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 && ny >= 0 &&
                nx < n && ny < m &&
                maps[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                visited[nx][ny] = true;
                maps[nx][ny] = maps[x][y] + 1; // 이동 거리 누적
                queue.push([nx, ny]);
            }
        }
    }

    return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}