/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    let xAxis = {}; //x좌표가 같은것들
    let yAxis = {}; //y좌표가 같은 것들 

    let minArea = Infinity;

    for(let [x,y] of points){
        if(!xAxis[x]) xAxis[x] = [y];
        else xAxis[x].push(y);

        if(!yAxis[y]) yAxis[y] = [x];
        else yAxis[y].push(x);
    }

    //[x,y] 가 같은거 순회해서 map에서 찾고, 대각선 x좌표가 같은거 찾기 , y 좌표가 같은거 찾기 

    //네점이 주어지고 네 점이 직사각형이 구해야함 -> 대각선의 점과 한 점이 주어지면 직사각형이 그려짐 
    //이중 for문을 그리면됨 
    for(let i = 0 ; i < points.length ;i++){
        let [px0,py0] = points[i]
        for(let j = i + 1 ; j <points.length ;j++){
            //두 점을 가리키는 포인터 
            //[1,1] 과 [1,3]이라면, 두
            //x에서 찾기 
            let [px1,py1] = points[j];

            curArea = Math.abs(px0 - px1) * Math.abs(py0 - py1)
            if (curArea ==0){
                continue;
            }
            
            //만약에 px0 의 py1가 xAxis에 없다면, 
            if(!xAxis[px0].includes(py1)){
                continue;
            }         

            if(!xAxis[px1].includes(py0)){
                continue;
            }

            minArea = Math.min(minArea, curArea);

        }
    }
    if(minArea == Infinity){
        minArea =0
    }
    
    //만약에 1,1 -> 1,3 , 3,1 
    return minArea
};


//대각선의 길이가 같아야함

//x, y 좌표로 좌표를 줌 

// 만약에 직사각형이 아니라면, return 0;

// 직사각형중 가장 크기가 작은거

//네 점을 구해야함 대각선의 길이가 같고 x끼리 같은거 y끼리 같은거 구해야함