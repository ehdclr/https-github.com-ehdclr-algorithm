const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
let count = 0;
let answer = -1;

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = 0;
  const sorted = [];

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }

  while (i <= mid) sorted[k++] = arr[i++];
  while (j <= right) sorted[k++] = arr[j++];

  // 정렬된 배열을 원본에 복사하면서 count 체크
  for (let x = left, idx = 0; x <= right; x++, idx++) {
    arr[x] = sorted[idx];
    count++;
    if (count === K) {
      answer = arr[x];
    }
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

mergeSort(nums, 0, N - 1);
console.log(answer);