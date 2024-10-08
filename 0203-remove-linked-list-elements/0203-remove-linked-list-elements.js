/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head == null) {
        return head
    }
    let dummyNode = new ListNode(-1);
    let currentNode = dummyNode;
    while (head != null) {
        if (head.val != val) {
            currentNode.next = head;
            currentNode = currentNode.next;
        }
        head = head.next;
    }
    currentNode.next = null;
    return dummyNode.next
};