const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 10 x 10 board


// i 번 칸 -> 주사위 굴려 나온수만큼 i +4 번 칸으로 이동  100 칸넘어가면 안됨

//사다리가 있다면 사다리 타고 올라간다 뱀이라면 뱀을 따라서 내려감 


// 사다리 타면 더 높은 숫자 뱀 타면 더 낮은 숫자

//100번 칸에 도착하는 게 목 표 최소 횟수


//[사다리, 뱀 수]
const [n, m] = input[0].split(' ').map(Number);
const matrix = new Array(101).fill(0)

for (let i = 1; i <= 100; i++) {
  matrix[i] = i;
}



//사다리 정보 x y

let ladder = new Map()
let snake = new Map()

for (let i = 1; i <= n + m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  if (i <= n) ladder.set(x, y);
  else if (i > n && i <= n + m) snake.set(x, y)
}


//dfs 로  최소를 보는게 맞는듯??

//이동은 1~ 6까지 있으니까

let queue = [];
let index = 0
queue.push([1, 0]);

let minCount = Infinity;
let visited = new Array(101).fill(false);

while (index < queue.length) {
  let [cur, count] = queue[index++];

  if (cur == 100) {
    minCount = Math.min(minCount, count)
    break;
  }
  for (let i = 1; i <= 6; i++) {
    let nxt = cur + i;
    if (nxt > 100) continue;
    if (ladder.has(nxt)) nxt = ladder.get(nxt);
    if (snake.has(nxt)) nxt = snake.get(nxt);

    if (!visited[nxt]) {
      visited[nxt] = true;
      queue.push([nxt, count + 1]);
    }
  }
}


console.log(minCount)