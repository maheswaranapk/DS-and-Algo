function getNode(head, positionFromTail) {

    let current = head;
    let tailPosition = head;

    for(let i = 0; i <= positionFromTail; i++) current = current.next;
    
    while(current !== null) {
        tailPosition = tailPosition.next;
        current = current.next;
    }

    return tailPosition.data;
}