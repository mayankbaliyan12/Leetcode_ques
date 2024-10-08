/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let max = 0;
    let start = head;
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow;
    let current = mid.next;
    let prev = null;
    while (current != null) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    let end = prev;
    while (start != null && end != null) {
        let sum = start.val + end.val;
        max = Math.max(max, sum);
        start = start.next;
        end = end.next;
    }
    return max;
};