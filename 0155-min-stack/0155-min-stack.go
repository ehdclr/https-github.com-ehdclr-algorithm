type MinStack struct {
    Stack []int
    MinStack []int
}


func Constructor() MinStack {
    return MinStack{
        Stack: make([]int, 0),
        MinStack: make([]int, 0),
    }   
}


func (this *MinStack) Push(val int)  {
    this.Stack = append(this.Stack,val)
    if len(this.MinStack) == 0 {
        this.MinStack = append(this.MinStack, val)
    } else {
        top := this.MinStack[len(this.MinStack) -1]
        if top >= val {
            this.MinStack = append(this.MinStack,val)
        }
    }
}


func (this *MinStack) Pop()  {
    if len(this.Stack) == 0 {
        return 
    } else {
        //만약에 MinStack의 top과 Stack의 top의 값이 같다면, 둘다 빼야함
        if this.MinStack[len(this.MinStack) -1] == this.Stack[len(this.Stack) -1 ] {
            this.Stack = this.Stack[:len(this.Stack) -1]
            this.MinStack = this.MinStack[:len(this.MinStack) -1]
        } else {
            //아니라면 그냥 stack만 빼기
            this.Stack = this.Stack[:len(this.Stack) -1]
        }
    }
}


func (this *MinStack) Top() int {
    if len(this.Stack) == 0 { 
        return 0
    }  else{
         return this.Stack[len(this.Stack)-1]
    }
}


func (this *MinStack) GetMin() int {
    if len(this.MinStack) == 0 {
        return 0
    } else {
        return this.MinStack[len(this.MinStack)-1]
    }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */