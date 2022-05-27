/*
    Common Stack Methods
        pop()
        push()
        peek()
        isEmpty()
*/

class Node {
    next = null;

    constructor(data) {
        this.data = data;
    }
}

class Stack {
    top = null;

    push(data) {
        const item = new Node(data);

        item.next = this.top;
        this.top = item;
    }

    pop() {
        if (this.top === null) return null;

        let item = this.top.data;
        this.top = this.top.next;

        return item;
    }

    peek() {
        return this.top;
    }

    isEmpty() {
        return this.top === null;
    }
}

let a = new Stack();
a.push(1);
a.push(2);
a.push(3);
console.log(a.pop());
console.log(a.peek());
console.log(a.isEmpty());