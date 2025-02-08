
// Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }


/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     let dummy = new ListNode(0); // 더미 노드 생성
//     dummy.next = head; // 더미 노드를 기존 head 앞에 연결
//     let current = dummy; // 현재 노드를 더미 노드부터 시작

//     while (current.next !== null) { // 리스트 순회
//         if (current.next.val === val) {
//             current.next = current.next.next; // val과 일치하는 노드 삭제
//         } else {
//             current = current.next; // 다음 노드로 이동
//         }
//     }

//     return dummy.next; // 더미 노드의 next가 새로운 head
// };

// var removeElements = function(head, val){
//     if(head == null) return null;
//     head.next = removeElements(head.next, val);
//     //recursive한 방법
//     return head.val === val ? head.next : head;
// }

var removeElements = function(head,val){

    //iterative한 방법
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let currentNode = head;
    let prevNode = dummyHead;

    while(currentNode){
        if(currentNode.val == val){ //삭제해야할 target이라면
            prevNode.next = currentNode.next;
            currentNode = currentNode.next;
        } else {
            //삭제 할 것이 아니라면, 그냥 넘어가기
            currentNode = currentNode.next
            prevNode = prevNode.next
        }
    }

    return dummyHead.next

}