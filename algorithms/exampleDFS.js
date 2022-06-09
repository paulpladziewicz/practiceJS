class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name);
        for (let child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}

const a = new Node('A');
a.addChild('B').addChild('C');
a.children[0].addChild('D');
a.children[0].addChild('E');
a.children[1].addChild('F');
a.children[1].addChild('G');
a.children[1].addChild('H');
console.log(a.depthFirstSearch([]));