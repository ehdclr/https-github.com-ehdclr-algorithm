/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //열을 기준으로 나열 먼저
    let n = matrix.length;
    let arr = Array.from({length : n} , () => []);

    //이게 열이라고 생각 두번째 인덱스가 세로 축임
    for(let j = 0 ; j < n ;j++){
        for(let i = n-1 ; i >= 0 ;i--){
            //열을 역순으로 넣음
            console.log(i,j)
            arr[j].push(matrix[i][j]);
        }
    }
    for(let i =0 ; i <n ;i++){
        for(let j = 0 ; j< n ; j++){
            matrix[i][j] = arr[i][j]
        }
    }

    return matrix;
};

//TODO n * n matrix
//90도 시계방향을 바꿨을 때, 결과 

