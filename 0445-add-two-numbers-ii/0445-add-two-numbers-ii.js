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
    let stack1 = [], stack2 = [];

    while(l1 !== null){
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while(l2 !== null){
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0; //자리 수 올라간다면,
    let head = null; //맨끝의 더미 헤드 

    while(stack1.length > 0 || stack2.length > 0 || carry !== 0){
        let sum = carry; //맨처음엔 더미 부분이니까

        if(stack1.length > 0) sum += stack1.pop()
        if(stack2.length > 0) sum += stack2.pop();


        carry = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10);

        newNode.next = head;
        head = newNode;

    }

    return head;
};