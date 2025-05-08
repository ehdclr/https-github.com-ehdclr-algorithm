const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//666은 종말을 나타내는 수라고한다.

//종말의 수는 6이 적어도 3개이상 연속으로 들어가는 수를 말함 

//n번째로 작은 종말의 수 

// N 이 10000보다 작음 

let count = 0;
let num = 666;
const N = Number(input[0]);

// N은 10000보다 작은 수 
// 0 부터 시작하는 숫자라고 보면되는데

//1000 * (n-1)n-1이 => 6이 되는 순간  1 더하면서 찾기 

while (true) {
  if (num.toString().includes('666')) {
    count++;
  }
  if (count == N) {
    console.log(num);
    break;
  }

  num++
}