func minRemoveToMakeValid(s string) string {

    //TODO stack 을 정해두고 

    stack := make([]int, 0)
    set := make(map[int]bool)

    for i,v := range s {
        if v == ')' {
            if len(stack) > 0  {
                stack = stack[:len(stack) -1] //맨끝 요소 제거
            } else {
                // 없으면
                set[i] = true
            }
        } else if v == '(' {
                stack = append(stack,i)
            } 
    }

    for len(stack) > 0 {
        top := stack[len(stack) -1]
        set[top] = true //맵에 추가
        stack = stack[:len(stack)-1] //제거
    }

    result := ""
    for i,v := range s {
        if _,exists := set[i]; exists {
            continue
        }
        result += string(v)
    }


    //문자를 한글자 돌때마다 result 에 더하고
    // )를 만날때 top에 없으면, 그냥 스킵
    return result
}