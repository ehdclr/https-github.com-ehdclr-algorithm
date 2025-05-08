const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let board = input.slice(1).map(line => line.split(""));
let result = Infinity;

const getMatrix = (x, y, startColor) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const expectedColor = (i + j) % 2 === 0 ? startColor : startColor === "W" ? "B" : "W";
      if (board[x + i][y + j] !== expectedColor) count++;
    }
  }
  return count
}

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    const getWhiteBoard = getMatrix(i, j, "W")
    const getBlackBoard = getMatrix(i, j, "B")
    result = Math.min(getBlackBoard, getWhiteBoard, result)
  }
}

console.log(result)


