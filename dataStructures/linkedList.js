/*
    Common Linked List Methods
    appendToTail()
    size()
    clear()
    getLast()
    getFirst()
 */

class Node {
    next = null;

    constructor(data) {
        this.data = data;
    }
}

// Singly
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    appendToTail(data) {
        let end = new Node(data);

        if (this.head === null) {
            return this.head = end;
        }

        let node = this.head;

        // while loops are great when you don't know how many steps are required
        while (node.next !== null) {
            node = node.next;
        }

        node.next = end;
    }

    size() {
        if (this.head === null) return 0;

        let node = this.head;

        let count = 1;

        while (node.next !== null) {
            count++;
            count++;
            node = node.next;
        }

        return count;
    }

    clear() {
        this.head = null; // this should be a new value
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (this.head === null) return null;

        if (this.head.next === null) return this.head;

        let node = this.head;

        while (node.next !== null) {
            node = node.next;
        }

        return node;
    }

    index_of(value) {
       let currentNode = this.head;
       let currentIndex = 0;

       if (currentNode.data === value) {
           return currentIndex;
       }

       while (currentNode.next !== null) {
           currentNode = currentNode.next;
           currentIndex++;
       };

       return null;
    }
}

let a = new Node(1);
let b = new LinkedList(a)

b.appendToTail(2);
b.appendToTail(3);

console.log(b.index_of(3));