function sortedInsert(head, data) {

    let currentHead = head.next;
    let previousHead = head;

    if(data <= previousHead.data) {
        let node = {
            data: data,
            next: previousHead,
            prev: null
        }

        previousHead.prev = node;
        return node;
    }

    while(currentHead !== null) {
         if(data > previousHead.data && (data <= currentHead.data)) {
             let node = {
                 data: data,
                 next: currentHead,
                 prev: previousHead
             }
             previousHead.next = node;
             currentHead.prev = node;
             return head;
         }   

        previousHead = previousHead.next;
        currentHead = currentHead.next;
    }

    if(data >= previousHead.data) {
        let node = {
            data: data,
            next: null,
            prev: previousHead
        }
        previousHead.next = node;
        return head;
    }

    return null;
}