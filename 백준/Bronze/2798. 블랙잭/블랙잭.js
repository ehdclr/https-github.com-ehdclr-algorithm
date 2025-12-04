const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let max = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum <= m && sum > max) {
        max = sum;
      }
    }
  }
}

console.log(max);
