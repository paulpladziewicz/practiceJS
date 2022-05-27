/*
    Common Queue Methods
        add()
        remove()
        peek()
        isEmpty()
*/
class Node {
    next = null;

    constructor(data) {
        this.data = data;
    }
}

class Queue {
    first = null;
    last = null;

    add(data) {
        const item = new Node(data);

        if (this.last !== null) {
            this.last.next = item;
        }

        this.last = item;

        if (this.first === null) {
            this.first = this.last
        }
    }

    remove() {
        if (this.first === null) return null;

        const data = this.first.data;

        this.first = this.first.next;

        if (this.first === null) {
            this.last = null;
        }

        return data;
    }

    peek() {
        if (this.first === null) return null;
        return this.first.data;
    }

    isEmpty() {
        return this.first === null;
    }
}

let a = new Queue();
a.add(1);
a.add(2);
a.add(3);
let b = a.remove();
b = a.remove();
console.log(b);
console.log(a.peek());
console.log(a.isEmpty());