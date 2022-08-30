import { BinaryTree } from '../../dataStructures/binaryTree.js'

const exampleTree = new BinaryTree();
exampleTree.insert(15);
exampleTree.insert(25);
exampleTree.insert(10);
exampleTree.insert(7);
exampleTree.insert(22);
exampleTree.insert(17);
exampleTree.insert(13);
exampleTree.insert(5);
exampleTree.insert(9);
exampleTree.insert(27);
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

let memo = {
    level: 0,
    value: 0
};
function nodeDepths(root, memo) {
    // if (!root) return throw new Error('No root node provided.');

    return recursiveFunction(root, memo);
}

function recursiveFunction(node, memo) {
    if (!node.left || !node.right) return memo.value;

    memo.level++;

    if (node.left) {
        memo.value += memo.level;
    }

    if (node.right) {
        memo.value += memo.level;
    }

    if (node.left) {
        recursiveFunction(node.left, memo);
    }

    if (node.right) {
        recursiveFunction(node.right, memo);
}
}

function nodeDepthsAnswer(root, depth = 0) {
    if (root === null) return 0;

    return depth + nodeDepthsAnswer(root.left, depth + 1) + nodeDepthsAnswer(root.right, depth + 1);
}

console.log(nodeDepthsAnswer(exampleTree.root))