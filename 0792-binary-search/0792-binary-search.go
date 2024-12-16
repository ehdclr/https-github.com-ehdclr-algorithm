import (
    "sort"
)

func search(nums []int, target int) int {
    // 배열 정렬
    sort.Ints(nums)

    start := 0
    end := len(nums) - 1

    // 이진 탐색
    for start <= end {
        mid := (start + end) / 2 // 중간값 계산 (정수 나눗셈)

        if nums[mid] == target {
            return mid // 타겟 발견 시 인덱스 반환
        } else if nums[mid] < target {
            start = mid + 1 // 타겟이 중간값보다 크면 오른쪽 탐색
        } else {
            end = mid - 1 // 타겟이 중간값보다 작으면 왼쪽 탐색
        }
    }

    return -1 // 타겟이 없으면 -1 반환
}