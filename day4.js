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
}

const main = () => {
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
    tree.bfs("w")
}
main();

//         a
//      /     \
//     b       d
//    / \    /  \
//   c   z  x    w  