function reversePrint(head) {

    let newHead = null;
    while (head !== null) {
        if(newHead === null) {
           newHead = {data: head.data, next: null}; 
        } else {
            newHead = { data: head.data, next: newHead};
        }
        head = head.next;
    }


    let outputArray = [];
    do {
        console.log(newHead.data)
        newHead = newHead.next;
    } while(newHead !== null)
    
    return null;
}