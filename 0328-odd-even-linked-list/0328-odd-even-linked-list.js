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
var oddEvenList = function(head) {
    let node_Odd=new ListNode(-1);
    let node_Even=new ListNode(-1);

    let current_Odd=node_Odd;
    let current_Even=node_Even;

    let current=head;

    let count=1;

    while(current){
        if(count%2!=0){
            current_Odd.next=current;
            current_Odd=current_Odd.next;
        }
        if(count%2==0){
            current_Even.next=current;
            current_Even=current_Even.next;
        }
        current=current.next;
        count++;
    }
    current_Odd.next = node_Even.next;
    current_Even.next = null;
    head = node_Odd.next;
    return head;
};