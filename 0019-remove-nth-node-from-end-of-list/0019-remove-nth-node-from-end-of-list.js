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
var removeNthFromEnd = function (head, n) {
    let backward = head;
    let forward = head;
    for (let i = 0; i < n; i++) {
        forward = forward.next;
    }
    if (forward == null) {
        return head.next;
    }
    while (forward.next != null) {
        backward = backward.next;
        forward = forward.next;
    }
    backward.next = backward.next.next;
    return head;
};