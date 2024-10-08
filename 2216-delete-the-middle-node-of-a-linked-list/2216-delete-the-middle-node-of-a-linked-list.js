/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    let prev = head;
    let slow = head;
    let fast = head;
    if (head.next == null) {
        head = null;
        // return head;
    }
    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // console.log({ slow })
    // console.log({ prev })
    if (slow.next == null) {
        prev.next = null;
        return head;
    }
    else if (slow.next != null) {
        slow.val = slow?.next?.val;
        slow.next = slow.next.next;
    }

    return head;
};