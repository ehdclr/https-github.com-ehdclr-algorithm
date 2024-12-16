func twoSum(nums []int, target int) []int {
    //두 수를 더했을 때, two sum // 투 포인터로도 풀 수 도 있지만, 하나를 더하고 , O(n^2)이 아닌 O(n)으로 풀 수 있다.

    newMap := make(map[int]int); //map을 생성

    for i,v := range nums {
        //하나의 수를 빼고 난 뒤에, map 에 저장 
        if prevIndex, exists := newMap[v] ; exists {
            return []int{prevIndex, i}
        }
        
        newMap[target-v] = i;
    }



    return []int{}
}