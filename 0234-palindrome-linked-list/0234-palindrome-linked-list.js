/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let s1='';
    let s2='';
    let current=head;
    while(current!=null){
        // s1.insert(current);
        s1 = `${s1}${current.val}`;
        s2 = `${current.val}${s2}`;
        current=current.next;
    }
    if(s1==s2){
        return true;
    }
    else{
        return false;
    }
};