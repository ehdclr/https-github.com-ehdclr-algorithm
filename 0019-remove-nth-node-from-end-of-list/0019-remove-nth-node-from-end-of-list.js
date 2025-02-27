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

    let countToGo = count - n;
    let dummy = new ListNode(0);
    dummy.next = head;
    current = dummy;
    
    for(let i = 0; i < countToGo ; i++){
        current = current.next;
    }

    current.next = current.next.next;


    return dummy.next;
};