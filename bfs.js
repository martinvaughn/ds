/************************************************************* */
// Binary Trees

/************************************************************* */
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BTree {
    constructor(root) {
        this.root = root;
    }

    stackDfs(value) {
        function dfs(root) {
            if (root == null) {
                console.log("Root Null.");
            }
            const stack = [root];
            while (stack.length > 0) {
                const current = stack.pop();
                console.log("Visiting: ", current.val);
                if (current.val == value) { console.log("Found: ", value) }
                if (current.right) { stack.push(current.right) };
                if (current.left) { stack.push(current.left) };

            }

        }
        dfs(this.root, value)
    }

    bfs(value) {
        if (this.root == null) { return; }
        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            console.log("Visiting: ", current.val);
            if (current.val == value) { console.log("Found: ", value); }
            if (current.left) { queue.push(current.left); }
            if (current.right) { queue.push(current.right); }
        }
    }

    binarySearch(target) {
        let current = this.root;

        while (current) {
            if (current.val == target) {
                console.log("Found: ", target)
                return true
            }
            if (target < current.val) {
                // go to the left
                if (current.left) {
                    console.log("going left...")
                    current = current.left
                };
            }
            if (target > current.val) {
                // go to the right
                if (current.right) {
                    console.log("going right...");
                    current = current.right
                };
            }

        }
        return false;

    }
}

const doDfs = () => {
    console.log("\n Doing DFS ");
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const z = new Node("z");
    const x = new Node("x");
    const w = new Node("w");

    a.left = b;
    b.left = c;
    a.right = d;
    b.right = z;
    d.left = x;
    d.right = w;

    const tree = new BTree(a);
    tree.stackDfs("w");
    //tree.bfs("w")
}

const doBfs = () => {
    console.log(" \n Doing BFS");
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const z = new Node("z");
    const x = new Node("x");
    const w = new Node("w");

    a.left = b;
    b.left = c;
    a.right = d;
    b.right = z;
    d.left = x;
    d.right = w;

    const tree = new BTree(a);
    tree.bfs("w")
}

const doBinarySearch = () => {
    console.log(" \n Doing Binary Search...")
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    const n6 = new Node(6);

    n3.left = n2;
    n2.left = n1;
    n3.right = n5;
    n5.left = n4;
    n5.right = n6;

    const bTree = new BTree(n3);

    bTree.binarySearch(9); // O(log n)

    // .        3
    // .      /   \
    // .     2     5
    // .    /    /   \
}   // .   1    4     6



doDfs();
doBfs();
doBinarySearch();


//         a
//      /     \
//     b       d
//    / \    /  \
//   c   z  x    w  
