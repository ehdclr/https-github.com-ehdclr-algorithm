
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0); // 더미 노드 생성
    let currentNode = dummyHead; // 현재 노드를 가리키는 포인터

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }

    // 남은 노드를 이어 붙이기
    if (list1 !== null) {
        currentNode.next = list1;
    } else {
        currentNode.next = list2;
    }

    return dummyHead.next; // 더미 헤드 다음 노드가 진짜 시작점
};