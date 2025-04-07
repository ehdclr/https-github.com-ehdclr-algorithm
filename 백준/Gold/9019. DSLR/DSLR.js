const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

// 네 개의 명령어 D,S,L, R


//레지스터에는 0 이상 10,000미만의 십진수를 저장할 수 있다. 

//D -> N을 두 배로 밖?ㅜㄴ다.  9999보다 큰 경우에는 10000으로 나눈 나머지를 취함 

//s -> n 에서 1을 밴 결과 N-1 N 이 0이라면 9999가 대신 레지스터에 저장

// L -> 각  자리수를 레지스터에  왼편부터 옮김

// R은 오른쪽 회전

//모든경우 최소는 -> BFS 가 적절


// A->B로 바꾸는 

//십진 자리수라고 생각하고 해야함

let T = Number(input[0]);
let line = 1;
const arr = ["D", "S", "L", "R"]



while (T--) {
  let [a, b] = input[line++].split(" ").map(Number);

  let queue = []
  let index = 0;
  let visited = new Array(10000).fill(false)
  queue.push({ num: a, cmd: "" })
  let answer = ""

  while (queue.length > 0) {
    const { num, cmd } = queue[index];
    index++
    if (num == b) {
      answer += cmd;
      break;
    }


    const nextStates = [
      { next: (num * 2) % 10000, cmd: 'D' },
      { next: num === 0 ? 9999 : num - 1, cmd: 'S' },
      { next: (num % 1000) * 10 + Math.floor(num / 1000), cmd: 'L' },
      { next: (num % 10) * 1000 + Math.floor(num / 10), cmd: 'R' }
    ];

    for (let { next, cmd: nextCmd } of nextStates) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push({ num: next, cmd: cmd + nextCmd });
      }
    }

  }

  console.log(answer)
}


