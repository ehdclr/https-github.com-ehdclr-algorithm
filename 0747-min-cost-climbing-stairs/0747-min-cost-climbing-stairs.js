/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCost = Infinity; 

    let dp = [];

    //최소가 필요하니까 
    dp[0] = 0;
    dp[1] = 0; //한칸 올라오는 방법 
    

    for(let i = 2 ;i <= cost.length ;i++){
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
    }

    return dp[cost.length]
};

//1개의 계단 혹은 2개의 계단을 오를 수 있음 
//0부터 시작하거나 혹은 첫번째 계단부터 시작할 수 있다. 

//끝으로 올라가는데 가장 최소 

//현재 계단으로 오는데 이전 계단에서 올라오거나, 2개의 계단을 올라오는 방법이 있음 
//f(n) = f(n-1) + f(n-2) 

//현재의 계단으로 올라오는데 , 이전의 코스트 + 현재 코스트 ,  2계단 전의 코스트  + 현재 코스트 중에서 Min 값으로 하면됨