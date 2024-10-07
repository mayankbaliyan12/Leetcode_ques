/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum=0;
    let carry=0;
    let dummyNode=new ListNode(-1);
    let current=dummyNode;
    while(l1!=null || l2!=null){
        sum=carry+ (l1?l1.val:0)+ (l2?l2.val:0);
        l1=l1?.next;
        l2=l2?.next;
        // console.log({sum})
        if(sum>9){
             carry=Math.floor(sum/10);
             sum=sum%10;
        }
        else{
            carry=0;
        }
        // dummyNode.next=new ListNode(sum);
        // console.log({dummyNode})
        current.next=new ListNode(sum);
        current=current.next;
    }
    if (carry!=0){
        current.next=new ListNode(carry);
        current=current.next;
    }
    return dummyNode.next;
};