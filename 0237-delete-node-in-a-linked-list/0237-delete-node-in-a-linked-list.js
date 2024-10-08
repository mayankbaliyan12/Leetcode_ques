/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // console.log(node);
    // if(node==null){
    //     return;
    // }
    
        if(node.val!=null){
            node.val=node.next.val;
            node.next=node.next.next;
        }
    
};