const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < n - 2; i++) {
  let left = i + 1;
  let right = n - 1;
  
  while (left < right) {
    const sum = nums[i] + nums[left] + nums[right];
    
    if (sum <= m) {
      max = Math.max(max, sum);
      left++;
    } else {
      right--;
    }
  }
}

console.log(max);