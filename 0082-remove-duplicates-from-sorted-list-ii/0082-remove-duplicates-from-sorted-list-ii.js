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
    let dummyNode= new ListNode(-1);
    dummyNode.next=head;
    let current=head;
    let prev = dummyNode;

    while(current!=null && current.next!=null){
        if(current.val!=current.next.val){
            prev=current;
            current=current.next;    
            }
            else{
                let val = current.val;
                while(current!=null && current.val==val){
                    current=current.next;
                }
                prev.next=current;
    }  
}
return dummyNode.next;
};