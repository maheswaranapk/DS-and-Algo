function hasCycle(head) {

    let keySet = {}
    keySet[head.data] = 0;
    let currentHead = head.next;

    while(currentHead !== null) {
        if(keySet.hasOwnProperty(currentHead.data)) {
            console.log(1)
            return 1;
        }
        keySet[currentHead.data] = 0;
        currentHead = currentHead.next;
    }

    return 0;
}