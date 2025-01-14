const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

class Queue {
    constructor() {
        this.queue = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(value) {
        this.queue[this.tailIndex] = value;
        this.tailIndex++;
    }

    dequeue() {
        if (this.getLength() === 0) return null;
        const value = this.queue[this.headIndex];
        delete this.queue[this.headIndex];
        this.headIndex++;
        return value;
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

const [n, m] = input[0].split(" ").map(Number);
const visited = [];

// 입력 데이터를 2D 배열로 변환
for (let i = 1; i <= n; i++) {
    let line = input[i].split("").map(Number);
    visited.push(line);
}

// BFS 탐색
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let queue = new Queue();
queue.enqueue([0, 0, 1]); // 시작 지점 [x, y, 거리]
visited[0][0] = 2; // 시작 지점을 방문 처리

while (queue.getLength() > 0) {
    const [curX, curY, dist] = queue.dequeue();

    // 목표 지점 도달 시 거리 출력 후 종료
    if (curX === n - 1 && curY === m - 1) {
        console.log(dist);
        break;
    }

    // 4방향 탐색
    for (let i = 0; i < 4; i++) {
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        // 유효한 좌표이고, 방문하지 않았으며, 이동 가능한 곳인 경우
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
            visited[nx][ny] = 2; // 방문 처리
            queue.enqueue([nx, ny, dist + 1]); // 큐에 추가
        }
    }
}