const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const t = Number(input[0]);

function convertToSeconds(time) {
  let [minutes, seconds] = time.split(':');
  let totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
  return totalSeconds;
}

function convertToTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let sec = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${sec}`;
}

let leadTeam = null; // 처음엔 아무도 리드하지 않음
let lastTime = 0;

let team = {
  H: {
    score: 0,
    totalTime: 0,
  },
  A: {
    score: 0,
    totalTime: 0,
  }
}

for (let i = 1; i <= t; i++) {
  let [curTeam, curScore, curTime] = input[i].split(" ");
  let currentSeconds = convertToSeconds(curTime);
  
  // 이전 시간부터 현재 시간까지 리드한 팀의 시간 추가
  let timeDiff = currentSeconds - lastTime;
  if (leadTeam) {
    team[leadTeam].totalTime += timeDiff;
  }
  
  // 점수 업데이트
  team[curTeam].score += parseInt(curScore);
  
  // 새로운 리드팀 결정
  if (team['H'].score > team['A'].score) {
    leadTeam = 'H';
  } else if (team['A'].score > team['H'].score) {
    leadTeam = 'A';
  } else {
    leadTeam = null; // 동점
  }
  
  lastTime = currentSeconds;
}

// 마지막 득점부터 경기 종료까지 처리
let gameEnd = convertToSeconds("32:00");
let remainingTime = gameEnd - lastTime;
if (leadTeam) {
  team[leadTeam].totalTime += remainingTime;
}

// 승자 결정
let winner = team['H'].score > team['A'].score ? 'H' : 'A';

console.log(winner + " " + convertToTime(team['H'].totalTime) + " " + convertToTime(team['A'].totalTime));