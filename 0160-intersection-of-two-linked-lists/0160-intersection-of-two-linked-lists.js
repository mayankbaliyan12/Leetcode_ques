/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let current1 = headA;
    let current2 = headB;
    let len1 = 0;
    let len2 = 0;
    function abs(a){
        return a<0?-a:a
    }

    while (current1 ) {
        len1++;
        current1 = current1.next;
    }
    while (current2 ) {
        len2++;
        current2 = current2.next;
    }
    let diff = len1 - len2;
    let currentA=headA;
    let currentB=headB;
    
    if (diff < 0) {
        currentA = headA;

        for (let i = 0; i < abs(diff); i++) {
            currentB = currentB.next;
        }
    }
    else {
        currentB = headB;
        for (let i = 0; i < abs(diff); i++) {
            currentA = currentA.next;
        }
    }
console.log(currentA)
console.log({currentB})
    while (currentA) {
        if (currentA == currentB) {
            return currentA;
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }
    return null;
};