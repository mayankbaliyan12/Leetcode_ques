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
function reverse(temp) {
    let prev = null;
    let current = temp;
    while (current != null) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}
function lastNode(temp, k) {
    k = k - 1;
    while (temp != null && k > 0) {
        k--;
        temp = temp.next;
    }
    return temp;
}
// function lastNode(temp) {
//    var count=0;
//    let current=head;
//    while(current!=null){
//     count++;
//     current=current.next;
//    }
//    return count;
// }

var reverseKGroup = function (head, k) {
    let temp = head;
    let prevNode = null;
    while (temp != null) {
        let kthNode = lastNode(temp, k);
        if (kthNode == null) {
            if (prevNode != null) {
                prevNode.next = temp;
            }
            break;
        }
        let nextNode = kthNode.next;
        kthNode.next = null;
        reverse(temp);
        if (temp == head) {
            head = kthNode;
        }
        else {
            prevNode.next = kthNode;
        }
        prevNode = temp;
        temp = nextNode;
    }
    return head;
};