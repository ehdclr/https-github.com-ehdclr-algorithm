import "math"

func minSubArrayLen(target int, nums []int) int {
    leftIndex := 0
    sum := 0; 
    minLength := math.MaxInt32 

    for rightIndex := 0 ; rightIndex < len(nums) ; rightIndex++ {
        sum += nums[rightIndex];

        //여기서 왼쪽인덱스를 줄여나간다. 
        for sum >= target {
            minLength = min(minLength, rightIndex-leftIndex + 1)
            sum -= nums[leftIndex]
            leftIndex++
        }

    }

    if minLength == math.MaxInt32 {
        return 0;
    }

    return minLength;    
}


func min(a,b int) int {
    if a < b {
        return a
    }

    return b
}

//먼저 오른쪽 맨끝을 정할 right를 루프를 돌아서 정함

//이중 반복문으로 해당 right에서 왼쪽을 줄여가보면서 target에 맞는지 정한다. 

// 가장 짧은 길이의 배열을 구하는 것이니 minLength 는 Math.int32

//두 값을 비교하는건 math.Min