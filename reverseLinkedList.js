class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }

  addToHead = (val) => {
    if (val === undefined) return;
    const newNode = new Node(val);
    if (!this.head.next) {
      this.head.next = newNode;
    } else {
      newNode.next = this.head.next;
      this.head.next = newNode;
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
console.log(myLinkedList);
