function reverse(head) {

    let currentNode = head;
    let nextNode = head.next;

    currentNode.next = null;

    while (nextNode !== null) {

        let nextCurrentNode = nextNode.next;
        nextNode.next = currentNode;
        
        currentNode = nextNode;
        nextNode = nextCurrentNode;

    }

    return currentNode;
}