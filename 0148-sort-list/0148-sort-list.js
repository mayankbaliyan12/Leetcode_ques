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
var sortList = function(head) {
    let current=head;
    let arr=[];
    while(current!=null){
          arr.push(current.val);
          current=current.next;
    }
    arr.sort((a,b)=>a-b)
    current=head;
    let i=0;
    while(current!=null){
        current.val=arr[i];
        current=current.next;
        i++;
    }
    return head;
};