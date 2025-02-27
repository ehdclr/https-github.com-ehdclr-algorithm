/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n==0) return head;

    let count = 0; 
    let current = head;
    
    while(current !== null){
        count ++
        current = current.next;
    }

    let countToGo = 0
    let dummy = new ListNode(0);
    dummy.next = head;
    current = dummy;
    
    while(current !== null && current.next !== null){
        if(countToGo == count - n){
            current.next = current.next.next;
        }
        countToGo++
        current = current.next
    }


    return dummy.next;
};