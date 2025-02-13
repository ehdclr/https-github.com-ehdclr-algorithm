

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }


/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //공간 O(n) 시간복잡도 O(n)
// var hasCycle = function(head) {

//     if( head == null) return false;

//     let nodeSet = new Set();
//     let currentNode = head;

//     while(currentNode){
//         if(nodeSet.has(currentNode)) return true;
//         nodeSet.add(currentNode);
//         currentNode = currentNode.next
//     }
//     return false;
    
// };

//O(1) 공간복잡도를 만들어달라 -> fast , slow 방법 fast와 SLOW가 만나게 되면 TRUE 시간 복잡도 O(N) + O(K)
var hasCycle = function(head) {
    if (head == null) return false;

    let fast = head, slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) return true; // 두 포인터가 만나면 순환 존재
    }

    return false;
};