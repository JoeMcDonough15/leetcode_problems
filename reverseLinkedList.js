class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = val !== undefined ? new Node(val) : null;
  }

  addToHead = (val) => {
    if (val === undefined) return;
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };
}

const myLinkedList = new LinkedList();

// console.log(myLinkedList);

myLinkedList.addToHead(5);

// console.log(myLinkedList);

myLinkedList.addToHead(4);
// console.log(myLinkedList);

myLinkedList.addToHead(3);
// console.log(myLinkedList);
