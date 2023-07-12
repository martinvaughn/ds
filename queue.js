// Write a queue from a LinkedIn list. Enqueue adds a new node to the back of the queue. Dequeue pops and returns the head node. IsEmpty checks if it's empty. peek just returns the value of head no pop.
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front  = null;
    this.back = null;
    this.length = 1;
  }

  iterate() {
    let temp = this.front;
    while (temp) {
      console.log("TEMP: ", temp.val);
      temp = temp.prev;
    }
  }

  // Add element to back.
  enqueue(val) {
    const newBack = new Node(val);
    if (this.front != null) {
      this.back.prev = newBack;
      this.back = newBack;
    } 
    else {
      this.front = newBack;
      this.back = newBack;
      // console.log("Back is now.. ", this.back.val);
    }
  }

  // Remove and return front element.
  dequeue() {
    if (this.front) {
      const data = this.front.val;
      this.front = this.front.prev;
      return data;
    } else { console.log("Error: attempting to dq an empty q"); }
  }

  // Return front element, don't remove it.
  peek() {
    return this.front.val;
  }

  // Check if queue is empty
  isEmpty() {
    if (this.front == null) { return true }
    else { return false }
  }
}


function main() {
  const q = new LinkedListQueue();
  q.enqueue("aaa");
  q.enqueue("bbb");
  q.enqueue("ccc");
  q.iterate();
  q.dequeue();
  q.dequeue();
  q.dequeue();
  q.enqueue("ddd");
  q.enqueue("fff");
  console.log("Q front should be ddd: ", q.front.val);
  console.log("Q back should be fff: ", q.back.val);
}
 
main()

// Insert: O(1)
// Delete: O(1);
// Search: O(n);
// Find: O(n);
