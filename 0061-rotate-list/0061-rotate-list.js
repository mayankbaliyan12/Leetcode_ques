/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(!head || k === 0) {
        return head;
    }
    let length = 1;
    let current = head;
    while (current.next != null) {
        length++;
        current = current.next;
    }
    k = length - (k % length);
    current.next = head;
    let new_head = head;
    for (let i = 0; i < k - 1; i++) {
        new_head = new_head.next;
    }
    head = new_head.next;
    new_head.next = null;

    return head;
};