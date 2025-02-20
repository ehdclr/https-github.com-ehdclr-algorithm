/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let current = headA;

    let newSet = new Set();

    while(current){
        newSet.add(current);
        current = current.next;
    }

    current = headB;
    
    while(current){
        if(newSet.has(current)) return current;
        current = current.next
    }

    return null
};