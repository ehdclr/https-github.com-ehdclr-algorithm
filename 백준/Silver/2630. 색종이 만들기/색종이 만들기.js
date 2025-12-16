const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

//큰 사각형을 작은 사각형으로 나누기때문에 재귀로 풀어야함
let N = Number(input[0]);

// 하얀색 종이 파란색 종이 나누기 -> 초기 4분면 나누고 , 파란색부분있으면 다음 재귀해서 갯수 세기 
let bCnt = 0;
let wCnt = 0;
// 1. 한부분이라도 파란색 있으면, N/2 사각형으로 쪼개기
// 1-1. 쪼개기전에 각 사분면에 전체 다 차있는 사각형 새기 (파란색) 혹은 흰색 
// 2. 다시 쪼개기 

//다 차있는지 확인
function isFulled(board) {
  let initColor = -1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (initColor == -1) {
        initColor = board[i][j]
      } else {
        if (initColor !== board[i][j]) {
          // 다르다면, 쪼개야지 
          // 네개로 쪼개야함 
          return -1;
        }
      }
    }
  }
  return initColor; // 다 차있으면 색깔 컬러로 주기 0은 하얀색 1은 파란색
}

function quarter(board, n) {
  let newBoard = [];
  if (n == 1) {
    for (let i = 0; i <= parseInt(board.length / 2) - 1; i++) {
      newBoard.push(board[i].slice(0, parseInt(board.length / 2)));
    }
  }
  else if (n == 2) {
    for (let i = 0; i <= parseInt(board.length / 2) - 1; i++) {
      newBoard.push(board[i].slice(parseInt(board.length / 2), board.length));
    }
  } else if (n == 3) {
    for (let i = parseInt(board.length / 2); i < board.length; i++) {
      newBoard.push(board[i].slice(0, parseInt(board.length / 2)));
    }
  } else {
    for (let i = parseInt(board.length / 2); i < board.length; i++) {
      newBoard.push(board[i].slice(parseInt(board.length / 2), board.length));
    }
  }
  // console.log(n, newBoard)
  return newBoard
}

function solution(board) {
  //첫 시도 
  //재귀 종료를 알려야함
  const result = isFulled(board);
  if (result == 0 || result == 1) {
    if (result == 0) wCnt += 1
    else bCnt += 1;
    return;
  } else if (result == -1) {
    solution(quarter(board, 1)) //네번의 재귀 board 슬라이싱 
    solution(quarter(board, 2)) //네번의 재귀 board 슬라이싱 
    solution(quarter(board, 3)) //네번의 재귀 board 슬라이싱 
    solution(quarter(board, 4)) //네번의 재귀 board 슬라이싱 
  }
}

let matrix = [];
for (let i = 1; i <= N; i++) {
  matrix.push(input[i].split(" ").map(Number));
}

solution(matrix);

console.log(wCnt)
console.log(bCnt)
