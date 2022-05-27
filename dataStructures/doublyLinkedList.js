class Node {
    next = null;

    constructor(data) {
        this.data = data;
    }
}

class DoublyLinkedList {
    head = null;

    /**
     * @param {Object} node
     */
    constructor(node) {
        this.head = node;
    }
}

let a = new DoublyLinkedList(new Node(5))