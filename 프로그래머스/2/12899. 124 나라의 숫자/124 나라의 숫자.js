function solution(n) {
  let answer = "";

  while (n > 0) {
    n -= 1;
    const digit = "124"[n % 3];
    answer = digit + answer;
    n = Math.floor(n / 3);
  }

  return answer;
}