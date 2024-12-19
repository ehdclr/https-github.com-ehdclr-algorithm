func pivotIndex(nums []int) int {
    totalSum := 0
    leftSum := 0

    // 전체 합 계산
    for _, num := range nums {
        totalSum += num
    }

    // 피벗 위치 계산
    for i, num := range nums {
        // 오른쪽 합 = 전체 합 - 왼쪽 합 - 현재 값
        rightSum := totalSum - leftSum - num

        if leftSum == rightSum {
            return i
        }

        // 왼쪽 합에 현재 값을 더함
        leftSum += num
    }

    return -1 // 피벗 인덱스가 없으면 -1 반환
}