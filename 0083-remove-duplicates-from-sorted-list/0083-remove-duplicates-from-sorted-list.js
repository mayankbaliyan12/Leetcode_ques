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
var deleteDuplicates = function(head) {
    let current=head;
    let duplicate=head;
    while(duplicate!=null && duplicate.next!=null){
        if(duplicate.val!=duplicate.next.val){
            current=current.next;
            duplicate=duplicate.next;
        }
        else{
            duplicate=duplicate.next;
            current.next=duplicate.next;
        }
        
    }
    return head;
};