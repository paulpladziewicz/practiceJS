import {Queue} from "../dataStructures/queue.js";

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.marked = false;
    }
}

class BinaryTree
{
    constructor()
    {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

const BST = new BinaryTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

function BFS(graph, value) {
    let queue = new Queue();
    return search(graph.root, value);
}

function search(node, value) {
    if ()
}