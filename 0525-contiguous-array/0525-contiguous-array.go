func findMaxLength(nums []int) int {
    sumMap := make(map[int]int)
    maxLength := 0;
    sum :=0;

    sumMap[0] = -1;

    for i, v := range nums {
     if v == 0 {
        v = -1
     }

        sum += v;

        if prevIndex, exists := sumMap[sum]; exists {
            maxLength = max(maxLength, i - prevIndex)
        } else {
            //없으면 map에 등록
            sumMap[sum] = i
        }

    }


    return maxLength;
}


func max(a,b int) int {
    if(a > b) {
        return a
    } else {
        return b
    }

}