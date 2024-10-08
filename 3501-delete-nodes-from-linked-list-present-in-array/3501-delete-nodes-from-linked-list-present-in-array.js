/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    let dummyNode = new ListNode();
    dummyNode.next = head;
    let current = head;
    let prev = dummyNode;


    let numSet = new Set(nums);

    while (current) {
        if (numSet.has(current.val)) {
            let next = current.next;
            prev.next = next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return dummyNode.next;
};