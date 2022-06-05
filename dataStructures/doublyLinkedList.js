// https://medium.com/geekculture/doubly-linked-lists-javascript-b13cc21ca59d
/*
* Common Methods
* prepend()
* append()
* insert()
* remove()
*/

class Node {
    previous = null;
    next = null;

    constructor(data) {
        this.data = data;
    }
}

class DoublyLinkedList {
    tail = null;
    length = 0;

    constructor(node = null) {
        this.head = node;
    }

    printList() {
        let array = [];
        let item = this.head;
        while (item !== null) {
            array.push(item.data);
            item = item.next;
        }

        console.log(array.join(' <--> '));
        return this;
    }

    prepend(data) {
        let item = new Node(data);

        this.head.previous = item;
        item.next = this.head;
        this.head = item;

        if (!this.tail) {
           this.tail = this.head.next;
        }

        this.length += 1;
    }

    append(data) {
        let item = new Node(data);

        if (!this.tail) {
            this.head.next = item;
            item.previous = this.head;
            return this.tail = item;
        }

        this.tail.next = item;
        item.previous = this.tail;
        this.tail = item;

        this.length += 1;
    }

    insert(index, value) {
        if (!Number.isInteger(index)
            || index < 0
            || index > this.length) {
            throw new Error('Invalid index');
        }

        if (index === 0) {
            this.prepend(value);
            return this;
        }

        if (index === this.length) {
            this.append(value);
            return this;
        }

        let newNode = new Node(value);
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next;

        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;

        this.length++;
    }

    remove(index) {
        if (!Number.isInteger(index)
            || index < 0
            || index > this.length) {
            throw new Error('Invalid index');
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;

            this.length--;
            return this;
        }

        if (index === this.length - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
            return this;
        }

        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        return this;
    }
}

let a = new DoublyLinkedList(new Node(5))
a.prepend(4);
a.append(6);
a.insert(1, 4.5);
console.log(a.length);
a.insert(2, 5.5);
console.log(a.length);
a.remove(3); // insert & remove is at index is still not working as expected
a.printList();