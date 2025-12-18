function solution(s) {

  s = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']'))
  s.sort((a, b) => a.length - b.length);

  // set 을 사용해 없는 것이면, 그대로 answer 에 넣기
  let answer = [...s[0]];
  for (let i = 1; i < s.length; i++) {
    let current = s[i];
    // 여기서 차이나는거 넣으면됨
    let diff = current.filter((el) => !answer.includes(el));
    answer.push(...diff)
  }
  return answer
}

//순서가 다르면 다른 튜플


//중복된 원소가 있을 수 있다. 원소에 정해진 순서 x
//원소의 개수는 유한함 
