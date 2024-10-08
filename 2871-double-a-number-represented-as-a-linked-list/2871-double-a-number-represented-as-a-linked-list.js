var doubleIt = function (head) {
    let dummyNode = new ListNode(-1);
    let currentAdd = dummyNode;
    let arr = [];
    let current = head;

    while (current != null) {
        arr.push(current.val);
        current = current.next;
    }

    let len = arr.length;
    let newNum = 2n * BigInt(arr.join(''));
    let digits = newNum.toString().split('').map(Number);

    for (let digit of digits) {
        currentAdd.next = new ListNode(digit);
        currentAdd = currentAdd.next;
    }

    return dummyNode.next;
};
