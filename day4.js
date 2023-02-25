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
                console.log("not found.");
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
}

const main = () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.left = b;
    b.left = c;
    a.right = d;

    const tree = new BTree(a);
    tree.stackDfs("d");
}
main();

//       a
//      / \
//     b   d
//    /
//   c