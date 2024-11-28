func removeDuplicates(s string) string {

    stack := make([]rune, 0)

    for _, v := range s {
        if len(stack) > 0 {
            if stack[len(stack) -1] == v {
                //top 이 현재와 같다면
                //stack 에서 제거 //끝 제거
                stack = stack[:len(stack) -1] 
            }  else {
                stack = append(stack,v) // 다르다면 그냥 추가
            }
        } else {
            stack = append(stack, v);
        }
    }

    //stack 에 남은걸 이제 문자로 더하기
    result := ""
    for _, v := range stack {
        result += string(v)
    }

    return result
}