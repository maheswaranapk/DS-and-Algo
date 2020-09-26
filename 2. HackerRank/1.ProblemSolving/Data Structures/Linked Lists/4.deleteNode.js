function deleteNode(head, position) {

    if(position === 0) 
        return head.next;

    let outHead = head;
    let prevhead = head;
    let currentHead = head;
    for(let i = 1; i <= position; i++) { 
        prevhead = currentHead;
        if(!currentHead.next) return outHead;
        currentHead = currentHead.next
    }

    prevhead.next = currentHead.next;

    return outHead;
}