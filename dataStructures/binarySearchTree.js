export class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

export class BinarySearchTree {
    constructor(root) {
        this.root = root;
    }

    insert(value) {
        const newNode = new Node(value)

        if (!this.root) {
            return this.root = newNode;
        }

        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.value === node.value) return; // No duplicates

        if (newNode.value < node.value) {
            if (!node.left) {
                return node.left = newNode;
            }

            this.insertNode(node.left, newNode);
        }

        if (newNode.value > node.value) {
            if (!node.right) {
                return node.right = newNode;
            }

            this.insertNode(node.right, newNode);
        }
    }

    remove(value) {

    }

    removeNode() {

    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}

const BST = new BinarySearchTree();
BST.insert(8);
BST.insert(4);
BST.insert(10);
BST.insert(2);
BST.insert(6);
BST.insert(20);

BST.postOrder(BST.root);