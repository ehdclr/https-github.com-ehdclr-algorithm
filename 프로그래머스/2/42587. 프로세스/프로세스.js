class Queue {
  constructor() {
    this.queue = {}
    this.headIdx = 0;
    this.tailIdx = 0;
  }

  append(val) {
    this.queue[this.tailIdx] = val;
    this.tailIdx++;
  }
  popLeft() {
    if (this.getLength() === 0) return null;
    let item = this.queue[this.headIdx];
    delete this.queue[this.headIdx];
    this.headIdx++;
    return item;
  }

  getLength() {
    return this.tailIdx - this.headIdx + 1;
  }

  peek() {
    return this.queue[this.headIdx];
  }
}

function solution(priorities, location) {
    //초기 위치 location 
    let q = new Queue();
    priorities.map((el,i) => q.append([el,i])); // [우선순위, 위치];
    priorities.sort((a,b) => b-a);
    
    let start = 0;
    let cnt = 0;
   
    while(q.getLength() > 0){
        let [p,idx] = q.popLeft(); 
        //현재 보다 더 큰게 있다. 맨앞에랑 같다.
        if(priorities[start] === p){
            cnt++;
            start++;
        if(idx === location){
            break;
        }
        } else {
         //아니라면, 걍 뒤에넣기
          q.append([p,idx]);
        }
    }
    return cnt;
}