import (
    "fmt"
    "math"
)

func minAreaRect(points [][]int) int {

    pointSet := make(map[[2]int]bool) //점 존재 여부를 확인하기 위한 맵 
    minArea := math.MaxInt32

    for _, point := range points {
        x, y := point[0], point[1]
        pointSet[[2]int{x,y}] = true;
    }



    for i := 0 ; i < len(points) -1 ; i++ {
        x0, y0 := points[i][0], points[i][1]; 
        for j := i + 1 ; j < len(points) -1 ; j++ {
            x1, y1 := points[j][0], points[j][1];

            if x0 != x1 && y0 != y1 {
                if pointSet[[2]int{x0, y1}] && pointSet[[2]int{x1, y0}] {
                    area := int(math.Abs(float64(x1 - x0)) * math.Abs(float64(y1 - y0)))
                    if area < minArea {
                        minArea = area
                    }
                }
            }

            
        }
 
    }


    if minArea == math.MaxInt32 {
        return 0
    }


    return minArea
}

//두 점을 구하고, 두점의 직 사각형이 가장 작은 사각형 구하기