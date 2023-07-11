class Node {
    constructor(next, value) {
        this.next = next;
        this.value = value;
    }
}

reverseLinkedList = (node) => {
    // base case
    if (node.next === null || node == null) {
        return node;
    }
    var rest = reverseLinkedList(node.next)
    node.next.next = node;
    node.next = null;
    return rest;
}

iterateLinkedList = (node) => {
    // action
    console.log(node.value);

    // base case.
    if (node.next === null) {
        return;
    }
    iterateLinkedList(node.next);
}

main = () => {
    const n4 = new Node(null, 4);
    const n3 = new Node(n4, 3);
    const n2 = new Node(n3, 2);
    const n1 = new Node(n2, 1);
    iterateLinkedList(n1);
    reverseLinkedList(n1);
    iterateLinkedList(n1);
}

main()
