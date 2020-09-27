
function insertNodeAtPosition(head, data, position) {

    let tempHead = head;
    for(let i = 0; tempHead !== null; i++) {

        if(i === position) {
            tempHead.next = {data: tempHead.data, next: tempHead.next}
            tempHead.data = data;
            return head;
        }
        tempHead = tempHead.next;
    }
}