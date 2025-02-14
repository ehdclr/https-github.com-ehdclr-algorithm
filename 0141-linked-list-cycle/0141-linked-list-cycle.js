/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let currentNode = head;
    let newSet = new Set();

    while(currentNode){
        if(newSet.has(currentNode)) return true
        else newSet.add(currentNode);

        currentNode = currentNode.next;
    }   

    return false;
};