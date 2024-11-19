/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length; // 행 갯수 3
    let m = matrix[0].length; // 열 갯수 4

    let start = 0, end = n * m -1 ;
    while(start<=end){
        let mid = parseInt((start+end)/2);
        let row = parseInt(mid/m)
        let col = mid % m;

        if(target > matrix[row][col]) start = mid +1;
        else if (target < matrix[row][col]) end = mid -1;
        else return true;
    }

    return false;
};