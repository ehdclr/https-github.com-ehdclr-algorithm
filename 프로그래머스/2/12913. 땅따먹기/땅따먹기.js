function solution(land) {
    // dp를 써야한다. 총 네개를 가진다
    let dp = Array.from({length: land.length }, ()=> new Array(4).fill(0));
    
    let row = land.length;
    // row x 4
    for(let i = 0 ; i< row ; i++){
        for(let j = 0 ; j < 4; j++){
            if(i == 0){
                dp[i][j] = land[i][j];
            } else {
               //아니라면 
                //만약 j가 +2 를할 수 있거나 -2 를 할 수 있을 때 체크해야함 
                //case를 나눠야함 
                if(j == 0){
                    dp[i][j] = Math.max(dp[i-1][j+1] + land[i][j], dp[i-1][j+2] + land[i][j], dp[i-1][j+3] + land[i][j])
                } else if( j == 3){
                    dp[i][j] = Math.max(dp[i-1][j-1] + land[i][j], dp[i-1][j-2] + land[i][j], dp[i-1][j-3] + land[i][j])
                } else if (j == 2){
                    dp[i][j] = Math.max(dp[i-1][j-1] + land[i][j], dp[i-1][j-2] + land[i][j], dp[i-1][j+1] + land[i][j])
                } else {
                    dp[i][j] = Math.max(dp[i-1][j-1] + land[i][j], dp[i-1][j+1] + land[i][j], dp[i-1][j+2] + land[i][j])
                }
                
            }
        }
    }
    console.log(dp)
    return dp[row-1].reduce((a,b)=> Math.max(a,b))
}


//땅따먹기 land N행(y) 4열(x)로 이루어짐 모든칸에는 점수

// 1행부터 땅을 밟음 4칸중 한칸만 밟는다. (행중에 하나 )

//같은 열을 밟을 수 없음

// 점수 최대값을 하는 경우 

// 100,000 이하의 자연수 -> 시간복잡도 N^2까진 노려볼만함 
// 백트래킹은 빡세고, 조합이니까 dp로 풀어야할듯 싶은데 이전 상태를 기억 , 바텀업 방식 