/*
    ? Problema 0001 - Suma de Dos
    * Autor : Mayquios 
*/

const addTwoNumbers = (l1, l2) => {
    const dummy = new ListNode();
    let carry = 0;
    let cur = dummy;
    while (l1 || l2 || carry) {
        const s = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(s / 10);
        cur.next = new ListNode(s % 10);
        cur = cur.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return dummy.next;
}

console.log(addTwoNumbers[2, 4, 3], [5, 6, 4])