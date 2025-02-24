/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //ITERATIVE 방법 
// var reverseList = function(head) {
//     if (!head) return head;
//     else if (!head.next) return head;

//     let currentNode = head.next;
//     let prevNode = head;
//     head.next = null;

//     while(currentNode){
//         let tmpNxtNode = currentNode.next;
//         currentNode.next = prevNode; 
//         prevNode = currentNode;
//         currentNode = tmpNxtNode;
//     }

//     return prevNode;
// };

//recursive
var reverseList = function(head){
    if(!head) return head;
    else if(!head.next) return head;

    let backHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return backHead;
}