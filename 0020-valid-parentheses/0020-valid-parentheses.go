func isValid(s string) bool {
    items := make([]rune,0)

    //스택에 담기

    for _, value := range s {
        //만약에 
        if value == '(' || value == '{' || value == '['  {
            //이라면 , 
            items = append(items, value)
        } else {
            if len(items) == 0 {return false}
            top := items[len(items) -1]
            //top 이 
            if top == '(' && value == ')' {
                items = items[:len(items) -1] // 마지막 요소 제거
            } else if top == '{' && value == '}' {
                items = items[:len(items)-1]
            } else if top == '[' && value == ']' {
                items = items[:len(items)-1]
            } else {
                return false;
            }

        }
    }

    return len(items) == 0
}