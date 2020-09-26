function insertNodeAtTail(head, data) {
    
    let output = head;
    let node = {data: data, next: null};
    if(head !== null) {
        while(head.next) head = head.next;
        head.next = node;
    } else {
        head = node;
        output = node;
    }

    return output;
}