const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const m = Number(input[2]);
const list = input[3].split(" ").map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  return rightIndex - leftIndex;
}

cards.sort((a, b) => a - b); //정렬 

let answer = ""
list.map((el) => {
    answer += countByRange(cards,el,el) + " ";
})

console.log(answer)
