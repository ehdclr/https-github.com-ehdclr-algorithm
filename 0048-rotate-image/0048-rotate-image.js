/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    //이중 for문으로 풀 수 있음 . -> 시간복잡도를 O(n^2)으로 줄일때
    let n = matrix.length;

    // matrix[x][y] 일때,
    //new xIndex = oldYIndex
    //new yIndex = n - oldXIndex

    for(let i = 0 ; i < Math.floor(n/2) ; i++ ){ //가로축
        for(let j = 0 ; j < Math.floor((n+1)/2); j++){ //세로축
            //하나의 점을 먼저 구하기 
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
    console.log(matrix)

    return matrix
};