

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //count 세는 방법
var middleNode = function (head) {
    let currentNode = head;
    let count = 0;


    while(currentNode){
        count++;
        currentNode = currentNode.next;
    }

    let mid = Math.floor(count /2);
    let index = 0;
    currentNode = head;

    while(index < mid){
        currentNode = currentNode.next;
        index++
    }

    return currentNode
};