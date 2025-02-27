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
// var removeNthFromEnd = function(head, n) {
//     if(n==0) return head;

//     let count = 0; 
//     let current = head;

//     while(current !== null){
//         count ++
//         current = current.next;
//     }

//     let countToGo = 0
//     let dummy = new ListNode(0);
//     dummy.next = head;
//     current = dummy;

//     while(current !== null && current.next !== null){
//         if(countToGo == count - n){
//             current.next = current.next.next;
//         }
//         countToGo++
//         current = current.next
//     }


//     return dummy.next;
// };


// twoPointers 방법
// var removeNthFromEnd = function(head, n){
//     if(n == 0) return head;

//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let firstNode = dummy;

//     //두개를 먼저 출발해두면, SECOND가 뒤늦게 출발해서 빠지게됨
//     for(let i = 0 ; i <= n ; i++){
//         firstNode = firstNode.next;
//     }

//     let secondNode = dummy;
//     while(firstNode !== null){
//         firstNode = firstNode.next;
//         secondNode = secondNode.next;
//     }

//     secondNode.next = secondNode.next.next
//     return dummy.next

// }

//array 방법
var removeNthFromEnd = function (head, n) {
    if (n == 0) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    let nodeList = [];

    while(current !== null){
        nodeList.push(current);
        current = current.next;
    }

    let deleteIdx = nodeList.length - n;
    let prevIdx = deleteIdx - 1;
    let prevNode = nodeList[prevIdx];
    prevNode.next = prevNode.next.next;

    return dummy.next;
}