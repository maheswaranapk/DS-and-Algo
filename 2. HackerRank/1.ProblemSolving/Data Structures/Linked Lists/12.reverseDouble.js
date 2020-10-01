function reverse(head) {

    let currentNode = head;

    while(currentNode.next !== null) {
        let nextnode = currentNode.next
        currentNode.next = currentNode.prev;
        currentNode.prev = nextnode;

        currentNode = nextnode;
    }

    currentNode.next = currentNode.prev;
    currentNode.prev = null;

    return currentNode;
}