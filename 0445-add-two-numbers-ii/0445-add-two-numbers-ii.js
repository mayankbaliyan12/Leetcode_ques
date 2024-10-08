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

function reverseList(head) {
    let prev = null;
    current = head;
    while (current != null) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}
var addTwoNumbers = function (l1, l2) {
    let newL1 = reverseList(l1);
    let newL2 = reverseList(l2);
    let dummyNode = new ListNode(-1);
    let newL3 = dummyNode;
    let carry = 0;
    while (newL1 != null || newL2 != null) {
        let sum = carry;
        if (newL1 != null) {
            sum = sum + newL1.val;
            newL1 = newL1.next;
        }
        if (newL2 != null) {
            sum = sum + newL2.val;
            newL2 = newL2.next;
        }
        if (sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        }
        else {
            carry = 0;
        }
        newL3.next = new ListNode(sum);
        newL3 = newL3.next
    }
    if(carry==1){
        newL3.next=new ListNode(carry);
    }
    return reverseList(dummyNode.next);
};