const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let n = Number(input[0]);

let words = Array.from(new Set(input.slice(1, n + 1)));

words.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    return a < b ? -1 : a > b ? 1 : 0;
});

console.log(words.join("\n"));