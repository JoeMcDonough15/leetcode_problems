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

  addToTail = (val) => {
    if (val === undefined) return;
    const newNode = new Node(val);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  };

  removeFromHead = () => {
    if (!this.head.next) return;
    const nodeToRemove = this.head.next;
    this.head.next = nodeToRemove.next;
    return nodeToRemove.val;
  };
}

const myLinkedList = new LinkedList();

// console.log(myLinkedList);

myLinkedList.addToHead(5);

// console.log(myLinkedList);

myLinkedList.addToHead(4);
// console.log(myLinkedList);

myLinkedList.addToHead(3);

myLinkedList.addToTail(6);

const removedVal = myLinkedList.removeFromHead();
console.log(removedVal); // 3

const nextRemovedVal = myLinkedList.removeFromHead();
console.log(nextRemovedVal); // 4
