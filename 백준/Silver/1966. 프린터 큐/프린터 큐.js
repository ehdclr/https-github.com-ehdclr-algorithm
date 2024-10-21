const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

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
    if (this.getLength() == 0) return null;
    let item = this.peek();
    delete this.queue[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    if (this.getLength() == 0) return null;
    return this.queue[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

//순서대로 -> 큐 구현
//자료형 큐를 사용

// 큐에 담아서 출력

//각 줄의 첫째줄에는 테스트 케이스

//첫번째 줄은 문서의 개수 , 몇번째로 인쇄되었는지 궁금한 문서가 현재 Queue에 몇번째인지  정수 m이 주어짐

let tc = Number(input[0]);
let line = 1;

//시간 복잡도는 2^n까지 가능하다 100개정도의 입력이기 때문에

//우선순위 큐를 써도 되긴함

while (tc--) {
  let [n, m] = input[line].split(" ").map(Number);

  let arr = input[line + 1].split(" ").map(Number); //초기에 담긴 문서
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push([arr[i], i]); //[우선순위 숫자, 초기 인덱스]
  }

  let finish = []; // [우선순위 숫자, 초기 인덱스]

  while (finish.length < n) {
    let [prior, index] = graph.shift();

    //종료 조건은 finish의 length가 n과 같아지는것
    //얘보다 우선순위 있다면, 다시 큐에 맨뒤에 넣기
    if (graph.some((el) => el[0] > prior)) {
      graph.push([prior, index]);
    } else {
      //없다면 finish에 담기
      finish.push([prior, index]);
    }
  }

  //인덱스보다 +1 출력해야함 몇번째인지 이기 때문에 -> 나오는 순서
  let resultIndex = finish.findIndex((el) => el[1] === m);
  console.log(resultIndex + 1);

  // 1 2 3(v) 4 | 2 3(v) 4 1 | 3(v) 4 1 2 | 4 1 2 3(v)  | 1 2 3(v)  | 2 3(v) 1 | 3(v) 1 2 -> 원하는 숫자가 두번째로 나감

  line += 2;
}
