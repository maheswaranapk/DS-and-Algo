function insertNodeAtHead(head, data) {
    let node = {data: data, next: head}
    head = node;
    return head;
}