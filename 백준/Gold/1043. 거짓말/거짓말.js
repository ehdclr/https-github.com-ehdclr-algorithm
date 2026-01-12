// 과장해서 얘기하려고함 몇몇은 진실을 앎 
// 그런 사람들 있을 때 진실 
// 어떤 사람이 진실을 듣고, 또 다른파티에서 과장을 들으면 지민이는 거짓말쟁이임

// 지민이가 거짓말쟁이가 되면안됨

// 과장된 얘기를 할 수 있는 최댓값 
// 그렇다면 서로 건너건너 아는 사이임 -> 단체가 묶여있음 서로소 문제 혹은 집합 문제 
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const [n, m] = input[0].split(' ').map(Number);



// N, M <= 50이하 자연수 , 0 <= 진실 아는 사람 수 <= 50 , 파티 오는 사람 수 1 <= 50 


// 진실을 아는 사람이 있는 파티에는 절대 말을 못한다. 그러면 진실을 아는 사람이 있는 파티가 있다면, 같이 아는 사람으로 묶어야함 
// 먼저 진실 아는 사람 -> 진실아는 사람과 같은 파티 (묶어서)[진실을 아는 사람과 ] 모르는 사람 으로 나누고, 
// 전체 파티에서 진실을 아는 사람이 참석한 파티를 빼야함 

function find(x) {
  if (p[x] !== x) {
    p[x] = find(p[x])
  }
  return p[x] // 대표 찾기 
}


const p = new Array(n + 1).fill(0);
for (let i = 0; i <= n; i++) p[i] = i;
const knows = new Set(input[1].split(' ').map(Number).slice(1));
const groups = [];

for (let i = 2; i < 2 + m; i++) {
  let line = input[i].split(' ').map(Number);
  let pCnt = line[0];
  let people = line.slice(1);
  groups.push(people)
  for (let j = 1; j < pCnt; j++) {
    let r1 = find(people[j - 1]);
    let r2 = find(people[j]); // 
    if (r1 !== r2) {
      p[r1] = r2; // union 둘이 
    }
  }
}
// 나중에 knows를 순회를 돌려서 같은 조합을 다시 knows를 추가해야함 

for (let s of knows) {
  // 다 하나씩 찾기 
  for (let i = 1; i <= n; i++) {
    if (s == i) continue;
    if (find(s) === find(i)) knows.add(i); // 여기서 친구 조합 아는 사람 찾기
  }
}

let ans = m;
for (let g of groups) {
  for (let x of g) {
    if (knows.has(x)) {
      ans -= 1
      break;
    }
  }
}

console.log(ans)
