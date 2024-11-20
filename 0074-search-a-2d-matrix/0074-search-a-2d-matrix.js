/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length; // 가로 축 
    let m = matrix[0].length; // 세로 축

    let start = 0;
    let end = n * m -1;

    while(start<=end){
        let mid = parseInt((start+end)/2);
        let row = parseInt(mid / m);
        let col = mid % m;

        if(target > matrix[row][col]){
            start = mid +1
        } else if (target < matrix[row][col]){
            end = mid -1
        } else{
            return true
        }

    }
    return false
};