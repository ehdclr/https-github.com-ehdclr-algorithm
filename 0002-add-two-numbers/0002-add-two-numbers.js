/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let dummy = new ListNode(0);// 새로운 더미노드
    let current = dummy;
    let carry = 0; // 넘어가는 자리를 말함
    while(l1 !== null || l2 !== null || carry !== 0){
        let sum = carry; //실제 current 는 넘어가는 숫자 + 밸류

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if( l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;

};