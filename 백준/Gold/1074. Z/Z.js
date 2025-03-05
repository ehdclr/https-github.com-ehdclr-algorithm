const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, r, c] = input[0].split(" ").map(Number);

function zSearch(n, x, y, count) {
    if (n === 0) return count; // 크기가 1×1이면 현재 count 반환

    let size = 1 << (n - 1); // 현재 정사각형 크기의 절반
    let area = size * size;   // 한 사분면의 크기

    if (r < x + size && c < y + size) { // 1사분면
        return zSearch(n - 1, x, y, count);
    }
    if (r < x + size && c >= y + size) { // 2사분면
        return zSearch(n - 1, x, y + size, count + area);
    }
    if (r >= x + size && c < y + size) { // 3사분면
        return zSearch(n - 1, x + size, y, count + 2 * area);
    }
    return zSearch(n - 1, x + size, y + size, count + 3 * area); // 4사분면
}

console.log(zSearch(N, 0, 0, 0));