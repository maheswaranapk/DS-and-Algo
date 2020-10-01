function removeDuplicates(head) {

    let prevHead = head;
    let currentHead = head.next;

    while(currentHead !== null) {
        if(prevHead.data === currentHead.data) {
           prevHead.next = currentHead.next; 
           currentHead = prevHead.next;
        } else {
            prevHead = currentHead;
            currentHead = currentHead.next;
        }
    }

    return head;
}