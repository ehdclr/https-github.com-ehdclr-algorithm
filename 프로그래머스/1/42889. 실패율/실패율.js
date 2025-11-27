function solution(N, stages) {
  // 현재 도전중인 스테이지 번호가 각각 있음 
  let challenger = new Array(N + 2).fill(0); // 0 1 2 3 4 5 6 이미 도전중인  

  let fails = new Map(); //실패 확률 작성할 Map
  stages.map((el, idx) => {
    challenger[el] += 1;
  });

  // 실패한거 1단계하면 전체 세고 # 현재 숫자빼면됨
  let ans = []
  let prev = 0;

  let cur_stage = 1;
  while (cur_stage <= N) {
    let percent = challenger[cur_stage] / (stages.length - prev);
    if (challenger[cur_stage] == 0) {
      ans.push([cur_stage, 0])
    } else {
      ans.push([cur_stage, percent])
    }
    prev += challenger[cur_stage];
    cur_stage++;
  }


  ans.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0] //음수면 b가 앞에  
    } else {
      return b[1] - a[1]
    }
  })

  let result = ans.map((el) => el[0])

  return result;
}


// 0 1 3 2 1 1