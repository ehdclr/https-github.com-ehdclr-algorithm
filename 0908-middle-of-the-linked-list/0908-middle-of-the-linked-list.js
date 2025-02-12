

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //count 세는 방법 - 시간 복잡도 O(n) 공간복잡도 O(1)
// var middleNode = function (head) {
//     let currentNode = head;
//     let count = 0;


//     while(currentNode){
//         count++;
//         currentNode = currentNode.next;
//     }

//     let mid = Math.floor(count /2);
//     let index = 0;
//     currentNode = head;

//     while(index < mid){
//         currentNode = currentNode.next;
//         index++
//     }

//     return currentNode
// };

//한번에 이터레이션으로 - array에 넣는방법 O(N) 시간 복잡도 공간복잡도 O(n) 방법, 공간복잡도 O(1) -> ONE PASS방법 
var middleNode = function (head){
    //여러 개의 노드의 갯수로 만들수도 있다.
    //fast node slow node

    //두개씩 건너는 fastNode 하나씩 건너는 slowNode\
    //fast & slow 방법은 O(n) 공간복잡도는 O(1)
    //링크드 리스트로만 풀 수 있다. 
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // 중간 노드 반환

}