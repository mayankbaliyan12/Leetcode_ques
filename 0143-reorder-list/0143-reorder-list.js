/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let currentLeft = head;
    let current = head;
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow;
    let prev = null;
    current = mid.next;
    mid.next = null;
    while (current != null) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    let currentRight = prev;
    let dummyNode = new ListNode(-1);
    let currentDummy = dummyNode;

    while (currentLeft && currentRight) {
        currentDummy.next = currentLeft;
        currentLeft = currentLeft.next;
        currentDummy = currentDummy.next;

        currentDummy.next = currentRight;
        currentRight = currentRight.next;
        currentDummy = currentDummy.next;
    }
    if (currentLeft) {
        currentDummy.next = currentLeft;
    }
    if (currentRight) {
        currentDummy.next = currentRight;
    }
    head = dummyNode.next;
};