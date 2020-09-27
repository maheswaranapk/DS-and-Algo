function mergeLists(head1, head2) {

    let newHead = null;
    if(head1.data < head2.data) {
        newHead = {data: head1.data, next: null}
        head1 = head1.next;
    } else {
        newHead = {data: head2.data, next: null}
        head2 = head2.next;
    }

    let newHeadOutput = newHead;

    while (head1 || head2) {
        let node = null;
        if(!head1) {
            node = {data: head2.data, next: null}
            head2 = head2.next;
        } else if(!head2) {
            node = {data: head1.data, next: null}
            head1 = head1.next;
        } else {
            if(head1.data < head2.data) {
                node = {data: head1.data, next: null}
                head1 = head1.next;
            } else {
                node = {data: head2.data, next: null}
                head2 = head2.next;
            }
        }
            newHead.next = node;
            newHead = node;
    }

    return newHeadOutput;
}