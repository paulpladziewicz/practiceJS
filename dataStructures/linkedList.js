class Node {
    next = null;

    constructor(data) {
        this.data = data;
    }

    appendToTail(data) {
        let end = new Node(data);
        let n = this;

        while (n.next !== null) {
            n = n.next;
        }

        n.next = end;
    }
}

let a = new Node(1);
a.appendToTail(2)
a.appendToTail(3)

console.log(a);